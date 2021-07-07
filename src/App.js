import logo from './pei.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img style={Image} src={logo} className="App-logo" alt="logo" />
        <h1 style={Text}>
          U are watching a spining PEI CHEN HSIEH, so
        </h1>
        <h1 style={Text2}>
          Wish U a nice day! :)
        </h1>

      </header>
    </div>
  );
}

export default App;

const Image = {
      //flex : 1,
      width: 300,
      height: 300,
      radius: 30,
      marginTop: 10,
      marginBottom: 30, 
  };
const Text = {
    fontSize: 30,
    justifyContent: 'center',
    color: 'white',
    marginVertical: 20,
  };

const Text2 = {
  fontSize: 40,
    justifyContent: 'center',
    color: 'while',
    marginVertical: 20,

};