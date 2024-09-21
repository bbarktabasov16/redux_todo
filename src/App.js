import { Provider } from "react-redux";
import Counter from "./components/Counter/Counter";
import { createStore } from "redux";
import { counterReducer } from "./store/reducers";

const store = createStore(counterReducer)

function App() {

  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
