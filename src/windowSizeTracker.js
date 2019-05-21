import { Component } from 'react'

class WindowSizeTracker extends Component {
  state={width: 0 ,height: 0}
  
  handleWindowSize = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  componentDidMount() {
    this.handleWindowSize();
    window.addEventListener('resize', this.handleWindowSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSize);
  }
  
  render() {
    return this.props.render(this.state)
  }
}

export default WindowSizeTracker