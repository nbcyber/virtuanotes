import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MainNav } from './components/NavBar';
import { ELNIntroPage } from './pages/Mod_G/ELN_Intro';


function App() {
  return (
    <div className="App">
     <MainNav />
     <ELNIntroPage />
    </div>
  );
}

export default App;
