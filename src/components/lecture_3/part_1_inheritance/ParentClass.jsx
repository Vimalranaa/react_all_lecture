import React, {Component} from "react";

class ParentClass extends Component {
    constructor(props) {
        super(props);
        this.callMe = this.callMe.bind(this);
    }

    //ParentClass function

    callMe(){
        console.log('this is a method from parent class');
    }

    render() {
        return false;
    }
}

export default ParentClass;