

const cat = 'https://i.pinimg.com/originals/72/2d/95/722d9578d7be2bb5781f04b5754d78f7.png'

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img src={cat} style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
    );
  }
}

class MouseWithCat extends React.Component {
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
      <div style={{ position: 'fixed', height: '100%', width: '100%' }} onMouseMove={this.handleMouseMove}>
        RIP
        <Cat mouse={this.state} />
      </div>
    );
  }
}



import ButtonModal from './buttonModal'
import ScrollTracker from './scrollTracker'
import WindowSizeTracker from './windowSizeTracker'
import Storage from './binsByGabe'
import Mouse, { Cat, Dog } from './mouse'

// const first = 'https://vignette.wikia.nocookie.net/meme/images/2/23/Ycereal-guy-cereal-guy-big-squint.jpg/revision/latest?cb=20150714145553'
// const second = 'https://vignette.wikia.nocookie.net/meme/images/1/1d/Yt655563971_a663674241_z.jpg/revision/latest?cb=20150712012656'
// const tree = 'https://images.onlinelabels.com/images/clip-art/GDJ/Cartoon%20Tree%20Isolated-292510.png'

function App() {
  const valueRef = React.createRef()
  const dynamicInput = React.createRef()
  const dynamicValue = React.createRef()

  return (
    <div className="App">
      <Mouse render={mouse => (
        <Fragment>
          <header className="App-header">
            (Mouse Position) x: {mouse.x} y: {mouse.y}
          </header>
          <Cat mouse={mouse} />
        </Fragment>
      )}/>
    </div>
  );
}

export default App;







<ButtonModal
  render={({close}) =>
    <div> 
      <button onClick={close}>Close</button>
    </div>
  }
>
Open Modal
</ButtonModal>



<Storage
  render={({save, load, remove}) => 
    <Fragment>
      <input ref={valueRef} />
      <button onClick={()=>save('value', valueRef.current.value)}>save value</button>
      <button onClick={()=>alert(load('value'))}>show saved value</button>
      <div>
        key: <input ref={dynamicInput} />
        value: <input ref={dynamicValue} />
        <button onClick={()=>dynamicInput.current.value ? save(dynamicInput.current.value, dynamicValue.current.value) : {}}>save custom value</button>
        <button onClick={()=>alert(load(dynamicInput.current.value))}>get custom value</button>
      </div>
    </Fragment>
  }
/>

<img className='tree' src={tree} />

<ScrollTracker
  render={({distanceFromTop}) => 
    <Fragment>
      <div className='fixed'>
        <div>Scrolled {distanceFromTop} pixels</div>
        <img className='cereal' src={distanceFromTop === 0 ? first : second} alt='cereal spitta' />
      </div>
    </Fragment>
  }
/>

<WindowSizeTracker
  render={({height, width}) => 
    <div>full window height: {height}, width: {width}</div>
  }
/>

<Dog />