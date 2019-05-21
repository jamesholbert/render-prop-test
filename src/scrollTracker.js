import React, { Component } from 'react'
import { lorem } from './helpers'

class ScrollTracker extends Component {
  state={distanceFromTop: 0, showLorem: false}

  handleScrollDistance = () => {
    this.setState({distanceFromTop: window.pageYOffset})
  }

  componentDidMount() {
    this.handleScrollDistance()
    window.addEventListener('scroll', this.handleScrollDistance)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrollDistance)
  }

  render() {
    return <div>
      {this.props.render({...this.state })}
      {this.state.showLorem && lorem.map((l, i) => <div key={i}>{l}</div>)}
      <button onClick={()=>this.setState({showLorem: true})}>Show Lorem</button>
    </div>
  }
}

export default ScrollTracker