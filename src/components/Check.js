import React,{ Component } from 'react'

class Check extends Component {
    state = {
        name: 'Amirhossein barzegar'
    }

    checkName = e => {
        this.setState({
            name: e.target.value,
        });
    }

    render() {
        return (
            <>
                <input type="text" onChange={this.checkName} />
                <h1>Hello {this.state.name}</h1>
            </>
        );
    }
}

export default Check;