import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IEnvironementVariables } from "renderer/Data/interfaces";
import { RootState } from "renderer/Data/types";

let environementVariables: IEnvironementVariables[] = [
  {
    id: '',
    name: '',
    value: '',
  },
];

export const variableSLice = createSlice({
  name: 'variables',
  initialState: environementVariables,
  reducers: {
    addNewEnvironementVariables: (state, action: PayloadAction<IEnvironementVariables>) => {

    }
  },
});



export const { addNewEnvironementVariables} =
variableSLice.actions;

export const selectVariables = (state: RootState) => state.files;

export default variableSLice.reducer;
