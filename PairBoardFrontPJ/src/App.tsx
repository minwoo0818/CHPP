
import { AppBar, Box, Button, Container, CssBaseline, Toolbar, Typography } from '@mui/material'
// import './App.css'

function App() {


  return (
    <>
      <Container maxWidth='xl'>
        <CssBaseline />
        <AppBar position='static'>
          <Toolbar>
            <Typography variant="h4" sx={{mr: 7}} >
                게시판
              </Typography>
            <Box display="flex" alignItems="center" gap={3} sx={{ flexGrow: 1 }}>
              <Typography variant="h6">공지사항</Typography>
              <Typography variant="h6">자동차</Typography>
              <Typography variant="h6">게임</Typography>
              <Typography variant="h6">영화</Typography>
              <Typography variant="h6">스포츠</Typography>
              <Typography variant="h6">만화</Typography>
            </Box>
            <Button color="inherit" variant="text" size="large">로그인</Button>
          </Toolbar>
        </AppBar>
      </Container>
    </>
  )
}

export default App
