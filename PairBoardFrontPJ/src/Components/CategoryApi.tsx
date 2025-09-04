import axios from "axios";
import type { Board } from "../type";

const BASE_URL = import.meta.env.VITE_API_URL;

export const GetBoards = async(): Promise<Board[]> => {
    const response = await axios.get(`${BASE_URL}/category`);
    return response.data;
}