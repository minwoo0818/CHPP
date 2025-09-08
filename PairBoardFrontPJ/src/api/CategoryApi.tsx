import axios from "axios";
import { type Board_Type } from "../type";

const BASE_URL = import.meta.env.VITE_API_URL;

export const GetBoards = async(type: string): Promise<Board_Type[]> => {
    const response = await axios.get(`${BASE_URL}/category/${type}`);
    return response.data;
}

export const UpdateBoard = async(board:Board_Type): Promise<Board_Type> => {
    const response = await axios.put(`${BASE_URL}/category`,board);
    return response.data;
}