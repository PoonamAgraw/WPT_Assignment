import { Component } from "react";
export default class Case extends Component{
    constructor (props){
        super(props)
    }
    Case (event){
        console.log(event.target.value.toUpperCase())
    //    {
    //         console.log(t1.toUpperCase())
    //     }
    //     {
    //         console.log(t1.toUpperCase())
    //     }
    }
    render(){
        return(
            <>
            <b>Enter A Case:</b> <input type="text" onBlur={this.Case} id="t1" /><br></br>
            <button id ="b1"onClick={this.Case}>Lower Case</button>
            <button id="b2" onClick={this.Case}>Upper Case</button>
            </>
        )

    }
}