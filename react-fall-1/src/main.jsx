import './index.css'
import state, {subscribe, addPost, updateNewPostText }  from './redux/state'
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
          addPost={addPost}
          updateNewPostText={updateNewPostText}
        />
      </BrowserRouter>
    </StrictMode>
  )
}

renderEntireTree(state)
subscribe(renderEntireTree)
