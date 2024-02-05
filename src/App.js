import {Component} from 'react'

import ConfigurationContext from './context/ConfigurationContext'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {showContent: true, showLeftNavbar: true, showRightNavbar: true}

  onToggleShowContent = () => {
    this.setState(prev => ({showContent: !prev.showContent}))
  }

  onToggleShowLeftNavbar = () => {
    this.setState(prev => ({showLeftNavbar: !prev.showLeftNavbar}))
  }

  onToggleShowRightNavbar = () => {
    this.setState(prev => ({showRightNavbar: !prev.showRightNavbar}))
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state

    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent: this.onToggleShowContent,
          onToggleLeftNavbar: this.onToggleShowLeftNavbar,
          onToggleRightNavbar: this.onToggleShowRightNavbar,
        }}
      >
        <div className="app-container">
          <ConfigurationController />
          <Layout />
        </div>
      </ConfigurationContext.Provider>
    )
  }
}

export default App
