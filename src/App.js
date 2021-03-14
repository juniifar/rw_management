// import logo from './logo.svg';
import './App.css';
import HomeCardBody from './components/menu/home/homecardbody';
import HomeCardHeader from './components/menu/home/homecardheader';
import Menu from './components/menu/menu';

function App() {
  return (
    <div>
      <Menu/>
      <div className="container">
        <HomeCardHeader/>
        <HomeCardBody/>
      </div>
    </div>
  );
}

export default App;