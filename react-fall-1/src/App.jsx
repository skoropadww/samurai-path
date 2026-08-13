import { Component } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Profile from './components/Profile'
import './index.css'

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <Header />
        <div className="container">
          <div className="content_wrapper">
            <Sidebar />
            <Profile />
          </div>
        </div>
      </div>
    )
  }
}

export default App
