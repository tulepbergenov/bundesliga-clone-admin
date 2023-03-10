import { api } from "../axios";

const getFootballers = () => api.get("/footballers");

const getFootballer = (id: number) => api.get(`/footballers/${id}`);

export const footballerService = { getFootballers, getFootballer };
