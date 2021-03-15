import React from "react"
import './App.css';
import {Provider} from "react-redux"
import store from "./store"
import PlanList from "./containers/components/PlanList"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PlanList />
      </div>
    </Provider>
  );
}

export default App;
