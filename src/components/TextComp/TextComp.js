import React from 'react'
import './TextComp.css'

class TextComp extends React.Component {

    constructor(props) {
        super(props) // Allows the component to use everything inherited from the Component class of React

        this.state = {
            counter: 0,
            list_items: [],
            exist: false
        }
    }


    render() {

        const { title, className } = this.props

        return (
            <div>
                <p className={`${className}`}>
                    {title}
                </p>
            </div>
        )
    }

}

export default TextComp