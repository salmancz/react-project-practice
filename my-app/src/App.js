import "./App.css";
import Todo from "./components/Todo";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header logo="SuperStar" />
      <Header logo="imran" />
      <Header logo="dasd av" />
      <Header logo="saddsadas" />
      <Todo />
    </div>
  );
}

export default App;
