import React from "react";

import ChildComponent from "./ChildClass";

class ParentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'This is a message from parent class'
        };
    }

    clickMe() {
        console.log('Action triggered from child component');
    }

    render() {
        return (
            <div>
                <ChildComponent msg={this.state.message}
                    clickMe={this.clickMe} />
            </div>
        );
    }
}

export default ParentComponent;