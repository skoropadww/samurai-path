import { Component } from 'react'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
// import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import './index.css'

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <Header />
        <div className="container">
          <div className="content_wrapper">
            <Sidebar />
            {/* <Profile /> */}
            <Dialogs />
          </div>
        </div>
      </div>
    )
  }
}

export default App
