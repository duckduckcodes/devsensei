import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IRequest, ITab } from 'renderer/Data/interfaces';

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

interface ITabs {
  id: string;
  requests: IRequest[];
}

const tabsQueue: ITabs = {
  id: '',
  requests: [
    { type: 'POST', title: 'create new user user user user' },
    { type: 'GET', title: 'get all users' },
  ],
};

export const tabSlice = createSlice({
  name: 'files',
  initialState: tabsQueue,
  reducers: {
    addTabToQueue: (state, action: PayloadAction<IRequest>) => {
      state.requests = [
        ...state.requests,
        { type: action.payload.type, title: action.payload.title },
      ];
    },
    removeTabFromeQueue: (state, action: PayloadAction<IRequest>) => {
      state.requests.filter((fold) => fold.id != action.payload.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTabToQueue, removeTabFromeQueue } = tabSlice.actions;

export default tabSlice.reducer;
