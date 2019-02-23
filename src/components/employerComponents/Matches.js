import React,{Component} from 'react'

class Matches extends Component{
  constructor(){
    super()
    this.state = {
      count:0
    }
  }
  render(){
    let matches = this.props.matches
    let {count} = this.state
    const toShow = ()=>{
      if(matches.length===0){
        return <h1>No matches yet</h1>
      }else{
        return <h1>{matches[count].firstname}</h1>
      }
    }
    return(
      <div>
        {toShow()}
      </div>
    )
  }
}

export default Matches