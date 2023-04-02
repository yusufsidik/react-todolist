import Todo from "./components/Todo/Todo";
import { Toaster } from 'react-hot-toast'
function App() {
  return (
    <div className="App">
      <Todo />
      <Toaster/>
    </div>
  );
}

export default App;
