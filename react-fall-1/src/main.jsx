import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

let dialogsData = [
  { id: 1, name: 'Dimuchka' },
  { id: 2, name: 'Vilat' },
  { id: 3, name: 'Lida' },
  { id: 4, name: 'Vasia' },
  { id: 5, name: 'Pasha' },
]

let messagesData = [
  { id: 1, message: 'Hello' },
  { id: 2, message: 'How are you?' },
  { id: 3, message: "I'm fine, thank you!" },
  { id: 4, message: 'What are you doing?' },
  { id: 5, message: "I'm doing nothing, you?" },
  { id: 6, message: "I'm doing nothing, you?" },
]

let postsData = [
  { id: 1, massege: 'Hello, world!', likeCount: 10 },
  { id: 2, massege: 'Hi, how are you?', likeCount: 20 },
  { id: 3, massege: 'I am fine, thank you!', likeCount: 30 },
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App
      dialogsData={dialogsData}
      messagesData={messagesData}
      postsData={postsData}
    />
  </StrictMode>,
)
