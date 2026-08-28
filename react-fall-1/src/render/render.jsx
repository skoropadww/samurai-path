import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from '../App'
import { addPost } from '../redux/state'

export let renderEntireTree = (state) => {
    createRoot(document.getElementById('root')).render(
      <StrictMode>
        <BrowserRouter>
          <App
            state={state}
            addPost={addPost}
          />
        </BrowserRouter>
      </StrictMode>
    )
}