import React, { Component } from "react";
import "./App.css";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
import img6 from "./images/6.jpg";
import img7 from "./images/7.jpg";
import img8 from "./images/8.jpg";
import img9 from "./images/9.jpg";
import img10 from "./images/10.jpg";
import img11 from "./images/11.jpg";
import img12 from "./images/12.jpg";

class Rotate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12],
      change: 0
    };
    this.rightSide = this.rightSide.bind(this);
  }
  rightSide() {
    this.setState({ change: this.state.change + 1 });
    if (this.state.change === 11) {
      this.setState({ change: 0 });
    }
  }

  leftSide = () => {
    this.setState({ change: this.state.change - 1 });
    if (this.state.change === 0) {
      this.setState({ change: 11 });
    }
  }

  render() {
    return (
      <div>
        <h1><span className="sp1">360 </span><span className="sp2">Degree </span>
          <span className="sp3">Rotate </span><span className="sp4">Photo</span></h1>

        <img src={this.state.images[this.state.change]} alt="car" />

        <div>
          <button className="btn2" onClick={this.leftSide}>LEFT SIDE</button>
          <button className="btn1" onClick={this.rightSide}>RIGHT SIDE</button>
        </div>
      </div>
    );
  }
}

export default Rotate;