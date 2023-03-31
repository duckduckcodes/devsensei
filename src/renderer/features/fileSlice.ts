import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IFolderProps, IRequest, ISubFolderProps } from "@/Data/interfaces";

export interface CounterState {
  value: number;
}

// const state = {
//     id: "qsdftrgse"
//     title: "project-v1",
//     folders: [
//       {
//         id: string
//         title: "posts",
//         content: [
//           { id: "qsdfqsdf", type: "GET", title: "get one users" },
//           { id: "sdfqsdf", type: "DELETE", title: "get all users" },
//         ],
//       },
//     ],
//   };

interface AddContentPayload {
  folderIndex: number;
  content: IRequest;
}

const initialState: IFolderProps = {
  id: "",
  title: "",
  folders: [],
  requests: []
};

export const fileSLice = createSlice({
  name: "files",
  initialState,
  reducers: {
    addSubFolder: (state, action: PayloadAction<ISubFolderProps>) => {
      state.folders = [
        ...state.folders,
        {
          title: action.payload.title,
          requests: [],
        },
      ];
    },
    removeSubeFolder: (state, action: PayloadAction<ISubFolderProps>) => {
      state.folders.filter((fold) => fold.id != action.payload.id);
    },
    addRequest: (state, action: PayloadAction<AddContentPayload>) => {
      const { folderIndex, content } = action.payload;
      const folder = state.folders[folderIndex];
      folder.requests.push(content);
    },
    removeRequest: (state, action: PayloadAction<IRequest>) => {
      state.folders.forEach((fold) => {
        fold.requests.filter((cont) => cont.id != action.payload.id);
      });
    },
    changeRequestType: (state, action: PayloadAction<IRequest>) => {
      state.folders.forEach((fold) => {
        fold.requests.forEach((cont) => {
          if (cont.id === action.payload.id) {
            cont.type = action.payload.type;
          }
        });
      });
    },
    changeRequestTitle: (state, action: PayloadAction<IRequest>) => {
      state.folders.forEach((fold) => {
        fold.requests.forEach((cont) => {
          if (cont.id === action.payload.id) {
            cont.title = action.payload.title;
          }
        });
      });
    },
    changeSubFolderTitle: (state, action: PayloadAction<ISubFolderProps>) => {
      state.folders.forEach((sub) => {
        if (sub.id == action.payload.id) {
          sub.title = action.payload.title;
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addRequest, addSubFolder, removeRequest, removeSubeFolder } =
  fileSLice.actions;

export default fileSLice.reducer;
