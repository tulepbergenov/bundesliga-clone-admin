export interface IClubData {
  name: string;
  stadium: string;
  short_name: string;
  color: string;
}

export interface IClubDataEdit extends IClubData {
  win: number;
  draw: number;
  lose: number;
}
