import React,{ useState } from 'react'
import Child from './ChildFunctional'

function Hello() {
    const [fruitState, setFruitState] = useState({
        fruit: [
            {name: "Mango", weight:"120gm"},
            {name: "Apple", weight:"80gm"},
            {name: "Orange", weight:"40gm"},
        ]
    });
    const {fruit} = fruitState;
    return (
        <>
            <button onClick={clickHandler}>Change Me</button>
            <Child name={fruit[0].name} weight={fruit[0].weight}/>
            <Child name={fruit[1].name} weight={fruit[1].weight}/>
            <Child name={fruit[2].name} weight={fruit[2].weight}/>
        </>
    );

    function clickHandler() {
        setFruitState({
            fruit: [
                {name: "Sumsung", weight:"130gm"},
                {name: "Apple", weight:"90gm"},
                {name: "Nokia", weight:"50gm"},
            ]
        });
    }
}

export default Hello;