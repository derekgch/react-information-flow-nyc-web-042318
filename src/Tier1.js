import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    const initialColor = getRandomColor()
    this.state = {
      color: initialColor,
      childColor: getReducedColor(initialColor)
    }
  }

  handleClick= (event) => {
    if(event.target.className === "tier1"){
      let randColor = getRandomColor();
      this.setState({color:randColor, childColor:getReducedColor(randColor)})
    }else if(event.target.className === "tier2"){
      let randColor = getRandomColor();
      this.setState({childColor:getReducedColor(randColor)})
    }

  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div onClick={this.handleClick} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 color={this.state.childColor} />
        <Tier2 color={this.state.childColor} />
      </div>
    )
  }
}
