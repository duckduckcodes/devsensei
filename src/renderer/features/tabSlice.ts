import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IRequest, ITabs } from 'renderer/Data/interfaces';
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

const tabsQueue: ITabs = {
  id: '',
  requests: [
    {
      id: 'zedz',
      type: 'POST',
      title: 'create new user user user user',
    },
    { id: 'dfgbdv', type: 'GET', title: 'get all users' },
  ],
  activeTab: 'zedz',
};

interface ActiveTab {
  active: boolean;
}

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
        state.activeTab = action.payload.id;
      }
    },
    makeTabActive: (state, action: PayloadAction<{ id: string }>) => {
      state.activeTab = action.payload.id;
    },
    removeTabFromQueue: (state, action: PayloadAction<{ id: string }>) => {
      console.log('payload', action.payload.id);
      let toBeRemoved = state.requests.findIndex(
        (fold) => fold.id === action.payload.id
      );
      state.requests.splice(toBeRemoved, 1);
      if (state.requests.length === 0) {
        state.activeTab = undefined;
      }
      console.log('tabs', state.requests);
    },
  },
});

//TODO: fix the active bar bug, when user close bar, the new active bar should be the one before it, if it's the first, then it should be the one after it

// Action creators are generated for each case reducer function
export const { addTab, removeTabFromQueue, makeTabActive } = tabSlice.actions;

export const selectTabs = (state: RootState) => state.tabs;
export const activeTab = (state: RootState, tabId: string) => {
  return tabId === state.tabs.activeTab;
};

export default tabSlice.reducer;
