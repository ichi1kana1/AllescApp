import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <div className="container text-center mt-5">
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Switch>
        <Route path="/schedule" component={Schedule} />
      </Switch>
    </div>
  </BrowserRouter>
)

const Home = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <p><Link to="/about">Aboutへ</Link></p>
    </div>
  )
}

const About = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  )
}
export default App