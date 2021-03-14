// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href>Navbar</a>
      </div>
      </nav>
      <div className="container">
        <div className="py-3">
          <div className="card text-center">
            <div className="card-header">
              Featured
            </div>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div class="card-footer text-muted">
              2 days ago
            </div>
          </div>
        </div>
        <div className="row gx-3 gy-3 py-3">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                This is some text within a card body.
              </div>
            </div>    
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                This is some text within a card body.
              </div>
            </div>    
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                This is some text within a card body.
              </div>
            </div>    
          </div>
        </div>
        
        
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
