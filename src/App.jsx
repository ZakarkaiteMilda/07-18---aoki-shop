// import logo from './logo.svg';
import './App.css';
import { Aside } from './components/aside/Aside';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';

function App() {
  return (
    <div className="app">
      <Header />
      <Aside /> 
      <Main />     
    </div>
  );
}

export default App;
