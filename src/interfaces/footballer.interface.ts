export interface IFootballersResponse {
  data: IFootballer[];
}

export interface IEditFootballerResponse {
  message: string;
}

export interface IFootballerResponse {
  data: IFootballer;
}

export interface IDeleteFootballerResponse {
  message: string;
}

export interface IFootballerFormData {
  name: string;
  club_id: number;
  position: string;
  age: number;
  nationality: string;
  height: number;
  weight: number;
  player_history: string;
  current_season: string;
  last_game: string;
  career_records: string;
  int_appointments: string;
}

export interface IEditFootballerFormData {
  name: string;
  club_id: number;
  position: string;
  age: number;
  nationality: string;
  height: number;
  weight: number;
  appearances: number;
  goals: number;
  assists: number;
  ball_actions: number;
  distance: number;
  penalties: number;
  player_history: string;
  current_season: string;
  last_game: string;
  career_records: string;
  int_appointments: string;
}

export interface IFootballer {
  id: number;
  name: string;
  club_id: number;
  position: string;
  age: number;
  nationality: string;
  height: number;
  weight: number;
  appearances: number;
  goals: number;
  assists: number;
  ball_actions: number;
  distance: number;
  penalties: number;
  player_history: string;
  current_season: string;
  last_game: string;
  career_records: string;
  int_appointments: string;
}
