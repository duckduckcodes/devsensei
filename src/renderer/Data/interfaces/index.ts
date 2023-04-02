export interface IRequest {
  id: string;
  title: string;
  type: string;
}

export interface ISubFolderProps {
  id?: string;
  title: string;
  requests: IRequest[];
  folders?: ISubFolderProps[];
}

export interface IFolderProps {
  id?: string;
  title: string;
  folders: ISubFolderProps[];
  requests: IRequest[];
}

export interface ITab {
  id?: string;
  request: IRequest;
}

export interface ColorObject {
  backgroundColor: string;
  color: string;
  paddingTop: string;
  paddingBottom: string;
  paddingLeft: string;
  paddingRight: string;
  borderRadius: string;
}

export interface ITabs {
  id: string;
  requests: IRequest[];
  activeTab: string | undefined;
}