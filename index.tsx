import React from 'react'
import {Renderer , Window, Text} from '@nodegui/react-nodegui';


const App = () => {
    return (
        <Window>
            <Text>Hello from node</Text>
        </Window>
    )
}

Renderer.render(<App />)