import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from '../App'
import { addPost, updateNewPostText } from '../redux/state'

const root = createRoot(document.getElementById('root'))

export let renderEntireTree = (state) => {
  root.render(
    <StrictMode>
      <BrowserRouter>
        <App
          state={state}
          addPost={addPost}
          updateNewPostText={updateNewPostText}
        />
      </BrowserRouter>
    </StrictMode>
  )
}
