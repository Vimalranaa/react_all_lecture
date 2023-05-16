import react from 'react';


class ChildComponent extends react.Component {
    render() {
        const { msg } = this.props
        return (
            <div>
                <p>
                    Message from Parent Component : <b>
                        {msg}</b>
                </p>
                <button onClick={this.props.clickMe}>
                    Click Me
                </button>
            </div>
        );
    }
}

export default ChildComponent;