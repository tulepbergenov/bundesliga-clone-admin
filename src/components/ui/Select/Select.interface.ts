import { Dispatch, SetStateAction } from "react";

export interface ISelect {
  value: any;
  items: any[];
  onChange: Dispatch<SetStateAction<any>>;
}
