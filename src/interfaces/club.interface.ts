export interface IClubsResponse {
  data: IClub[];
}

export interface IClub {
  id: number;
  name: string;
  stadium: string;
  short_name: string;
  color: string;
  win: string;
  draw: string;
  lose: string;
}

export interface IClubResponse {
  data: IClub;
}

export interface IClubFormData {
  name: string;
  stadium: string;
  short_name: string;
  color: string;
}

export interface IEditClubFormData extends IClubFormData {
  win: number;
  draw: number;
  lose: number;
}
