import * as z from "zod";

export const footballerSchema = z.object({
  name: z.string().min(1, "Name is required"),
  club_id: z.number(),
  position: z.string().min(1, "Position is required"),
  age: z.number(),
  nationality: z.string().min(1, "Nationality is required"),
  height: z.number(),
  weight: z.number(),
  player_history: z.string().min(1, "Player history is required"),
  current_season: z.string().min(1, "Current season is required"),
  last_game: z.string().min(1, "Last game is required"),
  career_records: z.string().min(1, "Career records is required"),
  int_appointments: z.string().min(1, "Appointments is required"),
});

export const editFootballerSchema = z.object({
  name: z.string().min(1, "Name is required"),
  club_id: z.number(),
  position: z.string().min(1, "Position is required"),
  age: z.number(),
  nationality: z.string().min(1, "Nationality is required"),
  height: z.number(),
  weight: z.number(),
  appearances: z.number(),
  goals: z.number(),
  assists: z.number(),
  ball_actions: z.number(),
  distance: z.number(),
  penalties: z.number(),
  player_history: z.string().min(1, "Player history is required"),
  current_season: z.string().min(1, "Current season is required"),
  last_game: z.string().min(1, "Last game is required"),
  career_records: z.string().min(1, "Career records is required"),
  int_appointments: z.string().min(1, "Appointments is required"),
});
