
// import { AppBar, Box, Button, Container, CssBaseline, Icon, TextField, Toolbar, Typography } from '@mui/material'
// import SearchIcon from '@mui/icons-material/Search';
import Category from './pages/Category';
import ResponsiveAppBar from './Components/App_bar';
import Main from './pages/Main';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
// import Board from './pages/Board';
// import './App.css'

function App() {



  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path='/register' element={<Register></Register>}></Route>
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
