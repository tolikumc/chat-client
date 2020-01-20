import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import dialogs from './reducers/diaslogsReducer';

const rootReducer = combineReducers({
  dialogs
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
