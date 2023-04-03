import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IFolderProps, IRequest, ISubFolderProps } from '../Data/interfaces';
import { RootState } from 'renderer/Data/types';

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
  title: 'project-v1',
  requests: [
    { id: 'QDSQDQDSQD', type: 'GET', title: 'get one users', },
    { id: 'rgezrgzerg', type: 'DELETE', title: 'get all users', },
  ],
  folders: [
    {
      title: 'posts',
      requests: [
        {
          id: 'vsdfvsdfvsfdv',
          type: 'PUT',
          title: 'get one users',

        },
        {
          id: 'nrthnrnthtrn',
          type: 'PATCH',
          title: 'get all users',

        },
      ],
      folders: [],
    },
  ],
};

export const fileSLice = createSlice({
  name: 'files',
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
      state.folders.filter(
        (fold: ISubFolderProps) => fold.id != action.payload.id
      );
    },
    addRequest: (state, action: PayloadAction<AddContentPayload>) => {
      const { content } = action.payload;
      state.requests.push(content);
    },
    removeRequest: (state, action: PayloadAction<IRequest>) => {
      state.folders.forEach((fold: ISubFolderProps) => {
        fold.requests.filter((cont: IRequest) => cont.id != action.payload.id);
      });
    },
    changeRequestType: (state, action: PayloadAction<IRequest>) => {
      state.folders.forEach((fold: ISubFolderProps) => {
        fold.requests.forEach((cont: IRequest) => {
          if (cont.id === action.payload.id) {
            cont.type = action.payload.type;
          }
        });
      });
    },
    changeRequestTitle: (state, action: PayloadAction<IRequest>) => {
      state.folders.forEach((fold: ISubFolderProps) => {
        fold.requests.forEach((cont: IRequest) => {
          if (cont.id === action.payload.id) {
            cont.title = action.payload.title;
          }
        });
      });
    },
    changeSubFolderTitle: (state, action: PayloadAction<ISubFolderProps>) => {
      state.folders.forEach((sub: ISubFolderProps) => {
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

export const selectFiles = (state: RootState) => state.files;

export default fileSLice.reducer;
