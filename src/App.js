import { Route, Routes } from 'react-router-dom';
import './App.css';
import Container from './components/Container.Page';
import HomePage from './components/Home.page';
import RQSuperHeros from './components/RQSuperHeros.page';
import RQSuperHero from './components/RQSuperHero.page';
import ParallelQueries from './components/ParallelQueries.page';
import DynamicParallel from './components/DynamicParallel.page';
import DependentQueries from './components/DependentQueries.page';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Container/>}>
        <Route index  element={<HomePage/>} />
        <Route path='rqdependent' element={<DependentQueries email="test@test.com"/>} />
        <Route path='rqsuperheroes' element={<RQSuperHeros/>} />
        <Route path='dynamicparallel' element={<DynamicParallel heroIds={[1, 3]} />} />
        <Route path='/:heroid' element={<RQSuperHero />} />
        <Route path='/rqparallel' element={<ParallelQueries />} />
      </Route>
    </Routes>
  );
}

export default App;
