import { Provider } from "react-redux";
import Counter from "./components/Counter/Counter";
import { createStore } from "redux";
import rootReducer from "./store/reducers"
import { useState } from "react";
import TodoList from "./components/TodoList/TodoList";

const store = createStore(rootReducer)

function App() {
	const [switchComponent, setSwitchComponent] = useState(false)
  return (
    <Provider store={store}>
      <button onClick={() => setSwitchComponent(!switchComponent)}>Switch</button>
			{switchComponent ? <Counter /> : <TodoList />}
    </Provider>
  );
}

export default App;
