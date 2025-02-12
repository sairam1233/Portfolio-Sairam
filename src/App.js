import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'
import ReactContext from './context/ReactContext'

// Replace your code here
class App extends Component {
  state = {isActiveTab: 'About', isContact: false}

  onChangeActiveTab = val => {
    this.setState({isActiveTab: val})
  }

  onContact = () => {
    const {isContact} = this.state
    this.setState({isContact: !isContact})
  }

  render() {
    const {isActiveTab, isContact} = this.state
    return (
      <ReactContext.Provider
        value={{
          isActiveTab,
          onChangeActiveTab: this.onChangeActiveTab,
          isContact,
          onContact: this.onContact,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </ReactContext.Provider>
    )
  }
}

export default App
