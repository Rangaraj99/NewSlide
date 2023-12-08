import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  textAreas: [],
  selectedTextArea: null,
};

const textAreasSlice = createSlice({
  name: "textAreas",
  initialState,
  reducers: {
    selectTextArea: (state, action) => {
      state.selectedTextArea = action.payload;
    },
    deleteTextArea: (state, action) => {
      state.textAreas = state.textAreas.filter(
        (textArea) => textArea.id !== action.payload
      );
      state.selectedTextArea = null;
    },
    addTextArea: (state) => {
      const newTextArea = {
        id: Date.now(),
        position: { x: 0, y: 40 },
        fontSize: "",
        color: "",
        opacity: "",
      };
      state.textAreas.push(newTextArea);
      state.selectedTextArea = newTextArea;
    },
    updateTextArea: (state, action) => {
      const { id, updatedProperties } = action.payload;
      console.log(id, updatedProperties);
      state.textAreas = state.textAreas.map((textArea) =>
        textArea.id === id ? { ...textArea, ...updatedProperties } : textArea
      );
      console.log(state.textAreas);
    },
  },
});

export const { selectTextArea, deleteTextArea, addTextArea, updateTextArea } =
  textAreasSlice.actions;
export default textAreasSlice.reducer;
