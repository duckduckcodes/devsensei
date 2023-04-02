import { IFolderProps, IRequest, ITabs } from "../interfaces";

export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type RootState = {
  files: IFolderProps;
  tabs: ITabs;
};
