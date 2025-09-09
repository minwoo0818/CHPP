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

export const UploadImage = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${BASE_URL}/upload`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) throw new Error("이미지 업로드 실패");

  // 서버에서 "/uploads/파일명" 리턴
  return await response.text();
};

export const CreateBoard = async (data: Board_Type) => {
  const res = await axios.post(`${BASE_URL}/api/categroy`, data);
  return res.data;
}
