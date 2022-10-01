import { Route, Routes } from 'react-router-dom';
import './App.css';
import Container from './components/Container.Page';
import HomePage from './components/Home.page';
import RQSuperHeros from './components/RQSuperHeros.page';
import SuperHeroes from './components/SuperHeroes.page';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Container/>}>
        <Route index  element={<HomePage/>} />
        <Route  path='superheroes' element={<SuperHeroes/>} />
        <Route path='rqsuperheroes' element={<RQSuperHeros/>} />
      </Route>
    </Routes>
  );
}

export default App;
