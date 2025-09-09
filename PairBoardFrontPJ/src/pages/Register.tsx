import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Stack, Typography } from "@mui/material";

const BASE_URL = import.meta.env.VITE_API_URL;

const Register = () => {
  const [form, setForm] = useState({
    id: "",
    nickname: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const res = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("회원가입 성공!");
      navigate("/login"); // 회원가입 후 로그인 페이지로 이동
    } else {
      const msg = await res.text();
      alert(msg);
    }
  };

  return (
    <Stack spacing={2} width={300} margin="auto" mt={10}>
      <Typography variant="h5">회원가입</Typography>
      <TextField label="아이디" name="id" value={form.id} onChange={handleChange} />
      <TextField label="닉네임" name="nickname" value={form.nickname} onChange={handleChange} />
      <TextField
        label="비밀번호"
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
      />
      <Button variant="contained" onClick={handleSubmit}>
        회원가입
      </Button>
      <Button onClick={() => navigate("/login")}>로그인으로 가기</Button>
    </Stack>
  );
};

export default Register;
