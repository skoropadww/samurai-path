import './index.css'
import store from './redux/redux-store'
// import store from './redux/store'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const root = createRoot(document.getElementById('root'))

 let renderEntireTree = (state) => {
  root.render(
    <StrictMode>
      <BrowserRouter>
        <App
          state={state}
          dispatch={store.dispatch.bind(store)}
          />
        </BrowserRouter>
      </StrictMode>
    );
  };

  renderEntireTree(store.getState());
  store.subscribe(() => renderEntireTree(store.getState()));
