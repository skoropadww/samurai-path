import './index.css'
import store from './redux/redux-store'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { Provider } from 'react-redux'

const root = createRoot(document.getElementById('root'))

let renderEntireTree = () => {
  let state = store.getState()

  root.render(
    <StrictMode>
      <Provider store={store}>
      <BrowserRouter>
        <App
          state={state}
          dispatch={store.dispatch.bind(store)}
            store={store}
          />
      </BrowserRouter>
      </Provider>
    </StrictMode>,
  )
}

renderEntireTree()
store.subscribe(renderEntireTree)
