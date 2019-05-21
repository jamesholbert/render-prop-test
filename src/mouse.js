import React, { Component, Fragment } from 'react'

const cat = 'https://i.pinimg.com/originals/72/2d/95/722d9578d7be2bb5781f04b5754d78f7.png'
const dog = 'https://i.kym-cdn.com/entries/icons/original/000/007/447/yesthisisdog.jpg'

export const Cat = ({ mouse }) => (
  <img className='cat' alt='poor grumpy cat' src={cat} style={{ position: 'absolute', left: mouse.x+5, top: mouse.y+5 }} />
)

class Mouse extends Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

export default Mouse

export class Dog extends Component {
  state={
    x: 0, y: 0
  }

  handleClick = event => {
    this.setState({
      x: event.clientX - 100,
      y: event.clientY - 100
    });
  }

  componentDidMount() {
    window.addEventListener('click', this.handleClick);
    this.handleClick({clientX: -100, clientY: -100})
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleClick);
  }

  render() {
    return (
      <Fragment>
        <img className='dog' alt='poor grumpy cat' src={dog} style={{ position: 'absolute', left: this.state.x, top: this.state.y }} />
      </Fragment>
    )
  }
}