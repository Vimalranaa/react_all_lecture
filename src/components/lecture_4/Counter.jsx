import React, { Component } from "react";


class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    handleClick = () => {
        this.setState(() => ({
            count: this.state.count + 1
        }));
    };
    

    render() {
        return (
            <div>
                <h1 onClick={this.handleClick}>{this.state.count}</h1>

                <button onClick={() => this.handleClick()}>Click Me</button>
            </div>
        );
    }
}

export default Counter;