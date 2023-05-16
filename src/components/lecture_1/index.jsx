import React, { Component } from "react";




export default class Lecture_1 extends Component {
    constructor() {
        super();
        this.state = {
            name: 'anyname',
            date: new Date('1988-03-21').toDateString()
        }
    }

    handleClick() {
        this.setState({
            name: 'vimal'
        })
    }

    handleDate() {
        this.setState({
            date: new Date().toDateString()
        })
    }

    render() {
        return (
            <div style={{ color: 'black' }}>
                {this.state.name} 
                <br />
                {this.state.date}
                <br />
                <button onClick={() => this.handleClick()}>change name</button>
                <button onClick={() => this.handleDate()}>change Date</button>
            </div>
        )
    }


}
