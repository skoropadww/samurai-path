import { Component } from 'react'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './index.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <Header />
          <div className="container">
            <div className="content_wrapper">
              <Sidebar />
              <Routes>
                <Route path="/dialogs" element={<Dialogs />} />
                <Route path="/profile" element={<Profile />} />
                <Route path='/news' element={<News />}/>
                <Route path='/music' element={<Music />}/>
                <Route path='/settings' element={<Settings />}/>
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
