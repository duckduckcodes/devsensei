import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IRequest, ITab } from 'renderer/Data/interfaces';
import { RootState } from 'renderer/Data/types';
import store from 'renderer/store';

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
    { id: 'zedz', type: 'POST', title: 'create new user user user user' },
    { id: 'dfgbdv', type: 'GET', title: 'get all users' },
  ],
};

export const tabSlice = createSlice({
  name: 'tabs',
  initialState: tabsQueue,
  reducers: {
    addTab: (
      state,
      action: PayloadAction<{ id: string; title: string; type: string }>
    ) => {
      console.log('tabs: ', state.requests);
      let req = state.requests.find((req) => req.id === action.payload.id);
      if (!req) {
        state.requests.push({
          id: action.payload.id,
          type: action.payload.type,
          title: action.payload.title,
        });
      }
    },
    removeTabFromQueue: (state, action: PayloadAction<{ id: string }>) => {
      console.log('payload', action.payload.id);
      state.requests.splice(
        state.requests.findIndex((fold) => fold.id === action.payload.id),
        1
      );
      console.log('tabs', state.requests);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTab, removeTabFromQueue } = tabSlice.actions;

export const selectTabs = (state: RootState) => state.tabs;
export default tabSlice.reducer;
