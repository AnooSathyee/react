import logo from "./tek_logo.png";
import "./App.css";
import Item from "./Components/Item";

function App() {
  //const [todos, setTodos] = useState(["eat","sleep","code","pray","repeat"]);  //sample todo items.  these will need to be changed in your app.  Just filler todos, although they are quite important!
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <br />
          <p>Create a Todo List App</p>
          <Item />
        </div>
      </header>
    </div>
  );
}

export default App;
