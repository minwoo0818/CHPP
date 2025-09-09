import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Stack, Typography } from "@mui/material";

const BASE_URL = import.meta.env.VITE_API_URL;

const Login = () => {
  const [form, setForm] = useState({
    id: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("로그인 성공!");
      navigate("/category/all"); // 로그인 후 홈으로 이동
    } else {
      const msg = await res.text();
      alert(msg);
    }
  };

  return (
    <Stack spacing={2} width={300} margin="auto" mt={10}>
      <Typography variant="h5">로그인</Typography>
      <TextField label="아이디" name="id" value={form.id} onChange={handleChange} />
      <TextField
        label="비밀번호"
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
      />
      <Button variant="contained" onClick={handleSubmit}>
        로그인
      </Button>
      <Button onClick={() => navigate("/register")}>회원가입</Button>
    </Stack>
  );
};

export default Login;
