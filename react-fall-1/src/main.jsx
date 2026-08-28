import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import state from './redux/state.js'
import { BrowserRouter } from 'react-router-dom'
import { addPost } from './redux/state.js'

addPost('Hello, world! new post');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App
        state={state}
        addPost={addPost}
      />
    </BrowserRouter>
    
  </StrictMode>,
)
