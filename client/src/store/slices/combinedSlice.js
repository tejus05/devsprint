import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // array of objects
  homeObject:[{
    input: "",
    output: ""
  }],
  documentObject: [{
    input: "",
    output: ""
  }],
  processObject: [{
    input: "",
    output: ""
  }],
  feesObject: [{
    input: "",
    output: ""
  }],
  handbookObject: [{
    input: "",
    output: ""
  }]
};

const combinedSlice = createSlice({
  name: "combined",
  initialState,
  reducers: {
    setHomeObject(state, action) {
      // result is an object, state.homeObject is an array
      const result = action.payload;
      state.homeObject.push(result);
    },
    setDocumentObject(state, action) {
      const result = action.payload;
      state.documentObject.push(result);
    },
    setProcessObject(state, action) {
      const result = action.payload;
      state.processObject.push(result);
    },
    setFeesObject(state, action) {
      const result = action.payload;
      state.feesObject.push(result);
    },
    setHandbookObject(state, action) {
      const result = action.payload;
      state.handbookObject.push(result);
    }
  }
});

export const {
  setHomeObject,
  setDocumentObject,
  setProcessObject,
  setFeesObject,
  setHandbookObject
} = combinedSlice.actions;

export const combinedReducer = combinedSlice.reducer;