import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Create from './pages/Create';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import Explore from './pages/Explore';
import Header from './components/Header';
import Nav from './components/Nav';
import { AppContainer, PageContainer } from './styles/App.styled';

const App = () => {
  return (
    <AppContainer>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/create' element={<Create />}></Route>
          <Route path='/settings' element={<Settings />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/explore' element={<Explore />}></Route>
        </Routes>
      </Router>
    </AppContainer>
  );
};

export default App;
