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
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn Reactive
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
