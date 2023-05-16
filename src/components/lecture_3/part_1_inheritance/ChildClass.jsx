import ParentClass from "./ParentClass";

class ChildClass extends ParentClass {
    constructor(){
        super();
    }

    render() {
        this.callMe();
        return false;
    }

}
export default ChildClass;