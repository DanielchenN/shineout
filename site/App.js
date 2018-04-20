import React, { PureComponent, Fragment } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import classGenerate from './utils/classname'
import Home from './pages/Home'
import Components from './chunks/Components'
import Documentation from './pages/documentation'
import Header from './Header'

const clsMain = classGenerate(require('./styles/index.less'), 'main')

class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      versions: [],
    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const [, path, id] = window.location.hash.split('#')

      if (this.lastPath !== path) {
        document.body.scrollIntoView()
        this.lastPath = path
      }

      if (id) {
        setTimeout(() => {
          const element = document.getElementById(id)
          if (element) element.scrollIntoView()
        })
      }
    })

    fetch('../versions.json').then(res => res.json()).then((json) => {
      const versions = json.map(v => ({ content: v, url: `../${v}` }))
      this.setState({ versions })
    })
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Header versions={this.state.versions} />

          <div className={clsMain('body')}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/components" component={Components} />
              <Route path="/documentation" component={Documentation} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    )
  }
}

export default App
