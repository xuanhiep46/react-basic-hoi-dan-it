import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./Example/MyComponent";

/*
* Nó có 2 loại components: class component / function component (Cách 1 function, cách 2 arrow function)
*/


//JSX
function App() { 
//App = () => {}
//hoặc const App = () => {} //arrow function


    return ( //đây là 1 component
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello world with React.js(Hoi Dan IT)</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <MyComponent/>
          {/* link nó tới trang MyComponent */}
        </header>
      </div>
    );

}

export default App;


//chỉ đọc tài liệu trên trang chủ của nó trên reactjs.org
 
