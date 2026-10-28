import React from 'react'
import HeaderContainer from './components/Header/HeaderContainer'
import SidebarContainer from './components/Sidebar/SidebarContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import UsersContainer from './components/Users/UsersContainer'
import Login from './components/Login/Login'
import { Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import { initializeApp } from './redux/app-reducer'
import { connect } from 'react-redux'
import { withRouter } from './hoc/withRouter'
import { compose } from 'redux'
import Preloader from './components/common/Preloader/Preloader'

class App extends React.Component {
    componentDidMount() {
      this.props.initializeApp();
    }
    
    render() {
      if (!this.props.initialized) {
        return <Preloader />
      }
      return (
      <div className="app-wrapper">
        <HeaderContainer />
        <div className="container">
          <div className="content_wrapper">
            <SidebarContainer />
            <Routes>
              <Route path="/" element={<Navigate to="/profile" replace />} />
              <Route path="/dialogs/*" element={<DialogsContainer />} />
              <Route path="/profile/:userId?" element={<ProfileContainer />} />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

