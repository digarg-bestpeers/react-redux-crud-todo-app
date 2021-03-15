import planReducer from "./reducers/planReducer"
import {createStore} from "redux"

const store = createStore(planReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store;