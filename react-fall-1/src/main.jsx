import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { renderEntireTree } from './render/render'
import state from './redux/state'

renderEntireTree(state);