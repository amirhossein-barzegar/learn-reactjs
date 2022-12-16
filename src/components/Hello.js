import React,{ Component } from 'react'
import Child from './Child'

class Hello extends Component {
    state = {
        fruit: [
            {name: "Mango", weight:"120gm"},
            {name: "Apple", weight:"80gm"},
            {name: "Orange", weight:"40gm"},
        ]
    }

    clickHandler = () => {
        this.setState({
            fruit: [
                {name: "Sumsung", weight:"130gm"},
                {name: "Apple", weight:"90gm"},
                {name: "Nokia", weight:"50gm"},
            ]
        });
    }

    render() {
        return (
            <>
                <button onClick={this.clickHandler}>Change Me</button>
                <Child name={this.state.fruit[0].name} weight={this.state.fruit[0].weight}/>
                <Child name={this.state.fruit[1].name} weight={this.state.fruit[1].weight}/>
                <Child name={this.state.fruit[2].name} weight={this.state.fruit[2].weight}/>
            </>
        );
    }


}

export default Hello;