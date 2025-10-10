import { Component } from "react";

export default class Methods extends Component {
    constructor(props) {
        super(props)
        console.log("constructor is called");
    }

    // static getDerivedStateFromProps() {
    //     console.log("This is Derived method")
    // }

    render() {
        console.log("Hello this is render function");
        return <>
            {/* <h1>Hello World</h1> */}
        </>
    }

    componentDidMount() {
        console.log("The component Rendered sucessfully");
    }

    // getDerivedStateFromProps() {
    //     console.log("The component is updated")
    // }
    shouldComponentUpdate() {
    }

}