
// import { AppBar, Box, Button, Container, CssBaseline, Icon, TextField, Toolbar, Typography } from '@mui/material'
// import SearchIcon from '@mui/icons-material/Search';
import Category from './pages/Category';
import ResponsiveAppBar from './Components/App_bar';
// import Board from './pages/Board';
// import './App.css'

function App() {


  return (
    <>
      {/* <Container maxWidth='xl'>
        <CssBaseline />
        <AppBar position='static'>
          <Toolbar>
            <Typography variant="h4" sx={{mr: 7}}  href="#app-bar-with-responsive-menu">
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
            <SearchIcon />
            <TextField 
              sx={{
                    // 입력 필드의 배경색을 흰색으로 변경
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'white',
                      // 필드 테두리를 흰색으로 변경
                      '& fieldset': {
                        borderColor: 'white',
                      },
                      // 호버 시 테두리 색상
                      '&:hover fieldset': {
                        borderColor: 'white',
                      },
                      // 포커스 시 테두리 색상
                      '&.Mui-focused fieldset': {
                        borderColor: 'white',
                      },
                    },
                    // 입력 라벨을 흰색으로 변경
                    '& .MuiInputLabel-root': {
                      color: 'white',
                    },
                  }}
             />
            <Button color="inherit" variant="text" size="large">로그인</Button>
          </Toolbar>
        </AppBar>
      </Container>
      <Category></Category> */}
      <ResponsiveAppBar></ResponsiveAppBar>
      <Category></Category>
    </>
  )
}

export default App


// const App: React.FC = () => {
//   return (
    
//   );
// };

// export default App;
