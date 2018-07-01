import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'


export default class Tier2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      childColor: getReducedColor(this.props.color),
    }
  }

  componentDidUpdate(prevProps, prevState){
    console.log(prevProps, this.props.color)

    if( prevProps.color !== this.props.color){
      this.setState({childColor: getReducedColor(this.props.color)}, ()=>console.log(prevProps.color, this.props.color));
    }
  }

  handleChildClick = (event) =>{
    if(event.target.className === "tier3"){
      let randColor = getRandomColor();
      this.setState({childColor:getReducedColor(randColor)})
    }
  }


  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div className="tier2" style={{backgroundColor: this.props.color, color: this.props.color}}>
        <Tier3 color={this.state.childColor} handleChildClick={this.handleChildClick} />
        <Tier3 color={this.state.childColor} handleChildClick={this.handleChildClick} />
      </div>
    )
  }
}
