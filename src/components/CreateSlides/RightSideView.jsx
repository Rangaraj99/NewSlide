// RightSideView.js
import React from "react";
import { Box, Text, Input, Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { updateTextArea, deleteTextArea } from "../ReduxStore/textAreasSlice";

const RightSideView = () => {
  const textAreas = useSelector((state) => state.textAreas.textAreas);

  const selectedTextArea = useSelector(
    (state) => state.textAreas.selectedTextArea
  );

  const currentTextArea = textAreas.filter(
    (item) => item.id === textAreas.selectedTextArea
  );
  console.log(currentTextArea);
  const initialArea = {
    fontSize: selectedTextArea?.fontSize || "",
    color: selectedTextArea?.color || "",
    opacity: selectedTextArea?.opacity || "",
    position: selectedTextArea?.position || { x: 0, y: 0 },
  };

  console.log(initialArea);

  const dispatch = useDispatch();
  const [editedTextArea, setEditedTextArea] = React.useState(initialArea);

  const handleInputChange = (property, value) => {
    setEditedTextArea((prev) => ({ ...prev, [property]: value }));
  };

  const handleUpdateClick = () => {
    dispatch(
      updateTextArea({
        id: selectedTextArea,
        updatedProperties: editedTextArea,
      })
    );
  };

  const handleDeleteClick = () => {
    dispatch(deleteTextArea(selectedTextArea));
    setEditedTextArea(initialArea);
  };

  return (
    <Box p={4} bg="gray.300" w="100%">
      {selectedTextArea && (
        <Box>
          <Text fontSize="lg">Font Size:</Text>
          <Input
            type="text"
            value={editedTextArea.fontSize}
            onChange={(e) => handleInputChange("fontSize", e.target.value)}
          />

          <Text fontSize="lg">Color:</Text>
          <Input
            type="color"
            value={editedTextArea.color}
            onChange={(e) => handleInputChange("color", e.target.value)}
          />

          <Text fontSize="lg">Opacity:</Text>
          <Input
            type="text"
            value={editedTextArea.opacity}
            onChange={(e) => handleInputChange("opacity", e.target.value)}
          />

          <Text fontSize="lg">Position X:</Text>
          <Input
            type="text"
            value={editedTextArea.position.x}
            onChange={(e) =>
              handleInputChange("position", {
                ...editedTextArea.position,
                x: parseInt(e.target.value),
              })
            }
          />

          <Text fontSize="lg">Position Y:</Text>
          <Input
            type="text"
            value={editedTextArea.position.y}
            onChange={(e) =>
              handleInputChange("position", {
                ...editedTextArea.position,
                y: parseInt(e.target.value),
              })
            }
          />
          <Button mt={4} onClick={handleUpdateClick}>
            Update Text Area
          </Button>
          <Button mt={4} onClick={handleDeleteClick}>
            Delete Text Area
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default RightSideView;
