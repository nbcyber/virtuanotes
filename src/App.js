import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MainNav } from './components/NavBar';
import { ELNIntroPage } from './pages/Mod_G/ELN_Intro';
import { Route, Routes } from 'react-router';
import { Home } from './pages/Home';
import { EnterpriseLevelNetworking } from './pages/Mod_G';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="eln" element={<EnterpriseLevelNetworking />}>
          <Route path="intro" element={<ELNIntroPage />} />
            </Route>

          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
