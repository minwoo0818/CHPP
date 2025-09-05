
// import { AppBar, Box, Button, Container, CssBaseline, Icon, TextField, Toolbar, Typography } from '@mui/material'
// import SearchIcon from '@mui/icons-material/Search';
import Category from './pages/Category';
import ResponsiveAppBar from './Components/App_bar';
import Main from './pages/Main';
import { Route, Routes } from 'react-router-dom';
// import Board from './pages/Board';
// import './App.css'

function App() {



  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/category/:type' element={<Category></Category>}></Route>
      </Routes>
    </>
  )
}

export default App


// const App: React.FC = () => {
//   return (
    
//   );
// };

// export default App;
