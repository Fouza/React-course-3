import React from 'react'
import Button from './Button'

class TextComp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            list_items: [],
            exist: false
        }
    }

    //All declarations here

    handleChange() {
        //Bunch of actions
        this.setState({ exist: true })
    }

    render() {

        const { text } = this.props
        const { counter } = this.state
        return (
            <div>
                <p>{text}</p>
                <Button counter={counter}
                    setCounter={() => this.setState({ counter: counter + 1 })}
                />
                <h5>Second Counter {counter}</h5>
            </div>
        )
    }
}

export default TextComp