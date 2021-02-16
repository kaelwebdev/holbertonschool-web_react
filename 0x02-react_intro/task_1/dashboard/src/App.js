import logo from './holbertonLogo.jpg';
import './App.css';
import Notifications from "./Notifications";
import {getFullYear, getFooterCopy} from './utils.js';

function App() {
  return (
    <div className="App">
      <div id="root-notifications">
        <Notifications/>
      </div>
      <div className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
       <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </div>
    </div>
  );
}

export default App;