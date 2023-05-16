import React, { Component } from "react";




class Lecture_4 extends Component {
    constructor(props) {
        super(props);
        this.state = { hello: "vimal rana" };
        this.changeState = this.changeState.bind(this)
    }

    render() {
        return (
            <div>
                <h1>ReactJS components Lifecycle</h1>
                <h3>Hello {this.state.hello}</h3>
                <button onClick={()=>this.changeState()}>Click Here !</button>
            </div>
        );
    }


    componentWillMount() {
        console.log('Component Will MOUNT!')
    }

    componentDidMount() {
        console.log('Component Did MOUNT!')
    }


    changeState() {
        this.setState({ hello: "ALL!!- Its a Great reactjs Tutorial."});
    }


    componentWillRecieveProps(newProps) {
        console.log('Component Will Recieve Props!')
    }


    shouldComponentUpdate(newProps, newState){
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Component Will UPDATE!')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component Did UPDATE!')
    }

    componentWillUnmount() {
        console.log('Component Will UNMOUNT!')
    }

}

export default Lecture_4

