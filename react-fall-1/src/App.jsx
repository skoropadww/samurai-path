import { Component } from 'react'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import { Routes, Route } from 'react-router-dom'
import './index.css'


const App = (props) => {
    return (
        <div className="app-wrapper">
          <Header />
          <div className="container">
            <div className="content_wrapper">
              <Sidebar state={props.state.sidebar} />
              <Routes>
                <Route
                  path="/dialogs/*"
                  element={
                    <Dialogs
                      state={props.state.dialogsPage}
                      dispatch={props.dispatch}
                    />
                  }
                />
                <Route
                    path="/profile"
                    element={<Profile state={props.state.profilePage} dispatch={props.dispatch} />}
                />
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
