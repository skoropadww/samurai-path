import Header from './components/Header/Header'
import SidebarContainer from './components/Sidebar/SidebarContainer'
import Profile from './components/Profile/Profile'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import { Routes, Route, Navigate } from 'react-router-dom'
import './index.css'

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="container">
        <div className="content_wrapper">
          <SidebarContainer />
          <Routes>
            <Route path="/" element={<Navigate to="/profile" replace />} />
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
