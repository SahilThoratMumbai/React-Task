import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import FormDetails from './components/FormDetails';
import DrawerAppBar from './components/DrawerAppBar';

function App() {
  return (
    <>
      <DrawerAppBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/FormDetails" element={<FormDetails />} />
        <Route path="FormDetails/:id" element={<FormDetails />} />
      </Routes>
    </>
  );
}

export default App;
