import React, { Component } from 'react'

class Message extends Component 
{
    constructor(props)
    {
        super(props)
        this.state=
        {
            msg:this.props.msg
        }
        // this.handleClick=this.handleClick.bind(this)
    }
    handleClick=()=>
    {
        this.setState({msg:"Message Changed"},()=>console.log("Update Button Clicked"))
    }
    // handleClick()
    // {
    //     this.setState({msg:"Message Changed"},()=>console.log("Update Button Clicked"))
    // }
    render() 
    {
        return (
                    <div>
                        <h2>{this.state.msg}</h2>
                        {/* <button onClick={this.handleClick.bind(this)}>Update</button> */}
                        {/* <button onClick={()=>this.handleClick()}>Update</button> */}
                        {/* <button onClick={this.handleClick}>Update</button> */}
                        <button onClick={this.handleClick}>Update</button>
                    </div>
                )
    }
}

export default Message
