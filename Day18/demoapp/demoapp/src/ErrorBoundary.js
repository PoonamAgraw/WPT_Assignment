import { Component } from "react";
class ErrorBoundary extends Component{
    constructor(props){
        super (props);
        this.state = {hasError : false};
    }
    static getDrivedStateFromError(error){
        return {hasError : true};
    }
    componentDidCatch(error,errorInfo){}
    render(){
        if (this.state.hasError ){
            <h1>Something Went wrong.</h1>;
        }
        return this.props.children;
    }
}
export default ErrorBoundary;