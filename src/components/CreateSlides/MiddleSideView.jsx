// MiddleSideView.js
import React from "react";
import { Box, Button, Textarea } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { addTextArea, selectTextArea } from "../ReduxStore/textAreasSlice";

const MiddleSideView = () => {
  const dispatch = useDispatch();
  const textAreas = useSelector((state) => state.textAreas.textAreas);

  const handleTextClick = (id) => {
    dispatch(selectTextArea(id));
  };

  const handleAddText = () => {
    dispatch(addTextArea());
  };

  return (
    <Box
      h="85vh"
      bg="gray.200"
      width="100%"
      position="relative"
      display="flex"
      flexDirection="column"
    >
      <Box padding="10px">
        <Button onClick={handleAddText} marginRight="20px">
          Add Text
        </Button>
        <Button>Upload Image</Button>
      </Box>
      <Box position="relative" bg="white">
        {textAreas.map((textArea) => (
          <Box key={textArea.id} position="relative">
            <Textarea
              placeholder="add text"
              position="absolute"
              onClick={() => handleTextClick(textArea.id)}
              fontSize={textArea.fontSize}
              color={textArea.color}
              opacity={textArea.opacity}
              top={`${textArea.position.y}px`}
              left={`${textArea.position.x}px`}
              border={"none"}
              w="300px"
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MiddleSideView;
