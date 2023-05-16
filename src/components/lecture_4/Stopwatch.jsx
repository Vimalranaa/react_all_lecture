import React, { Component } from "react";


export class Stopwatch extends Component {
    constructor() {
        super();
        this.state = {
            isRunning: false, mm: 0, ss: 0, ms: 0,
        }
    }

    timerId = 0;

    clickHandler = () => {
        let { isRunning } = this.state;

        if (isRunning) {
            clearInterval(this.timerId)
        }
        else {
            let { mm, ss, ms } = this.state;

            this.timerId = setInterval(() => {
                ms++;
                if (ms >= 100) {
                    ss++;
                    ms = 0;
                }

                if (ss >= 60) {
                    mm++;
                    ss = 0;
                }

                this.setState({ mm, ss, ms });
            }, 10);
        }
        this.setState({ isRunning: !isRunning });
    }

    render() {
        return (
            <div>
                <p>
                    <span>{this.state.mm}</span>:
                    <span>{this.state.ss}</span>:
                    <span>{this.state.ms}</span>:
                </p>
                <button onClick={() => this.clickHandler()}>{this.state.isRunning ? 'stop' : 'start'}</button>
            </div>
        )
    }

}

export default Stopwatch