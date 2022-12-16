import React, {Component} from 'react'

class Child extends Component {
    render() {
        return (
            <>
                <h1>I Love {this.props.name} and weight is {this.props.weight}</h1>
            </>
        )
    }
}

export default Child;