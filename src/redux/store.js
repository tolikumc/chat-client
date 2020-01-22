import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import dialogs from './reducers/diaslogsReducer';
import messages from './reducers/messagesReducer';

const rootReducer = combineReducers({
  dialogs,
  messages
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
