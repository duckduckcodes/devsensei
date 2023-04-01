import { ColorObject } from 'renderer/Data/interfaces';
import { GET, PUT, POST, PATCH, DELETE } from '../Data/reaquest-type';

export default function requestStyle(params: any): ColorObject | undefined {
  console.log(params);
  switch (params) {
    case 'GET':
      return GET;

    case 'PUT':
      return PUT;

    case 'POST':
      return POST;

    case 'PATCH':
      return PATCH;

    case 'DELETE':
      return DELETE;
    default:
      return undefined;

    //may change this later
  }
}
