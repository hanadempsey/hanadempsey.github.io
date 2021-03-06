import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  handleClick(e) {
    console.log(e.target)
    let target = e.target
    console.log(target)
    let route = target.splice(5,-5)
    console.log(route)
  }


  render() {
    return (
      <div>
        <div>
          <h1 className="topMenu">
            <p className="changeMenu"><span>HANA DEMPSEY</span></p>
          </h1>
          <h2 className="navBar" >
            <span onClick={(e) => this.handleClick(e)}>WORKS</span><span onClick={(e) => this.handleClick(e)}>PHOTOS</span><span onClick={(e) => this.handleClick(e)}>DESIGN</span><span onClick={(e) => this.handleClick(e)}>RESUME</span>
          </h2>

          <footer>
            <div className="byMe"><div>CREATED BY</div><div>HANA DEMPSEY 2018</div></div>
            <div className="contact">
            <span>EMAIL</span>
            <span>INSTAGRAM</span>
            <span>LINKEDIN</span>
            <span>GITHUB</span>
            </div>
          </footer>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));