import React from 'react'

class BigComp extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.testMethod = this.testMethod.bind(this)
    }
    //Mounting
    componentDidMount() {
        console.log('Mounted')
    }
    //Updating
    componentDidUpdate(prevProps, prevState) {
        if (this.props.title !== prevProps.title) {
            console.log("Updated")
        }

        if (this.state.counter !== prevState.counter) {
            //actions
        }
    }
    //Unmounting
    componentWillUnmount() {
        console.log('Unmounting')
        // alert('Are you sure you want to exit ?')
    }
    shouldComponentUpdate(nextProps, nextState) {
        if ((nextProps.title !== this.props.title) || (nextState.counter !== this.state.counter)) {
            return true
        } else {
            return false
        }
    }
    handleInputChange(event, counter) {
        const value = event.target.value
        this.setState({ counter: value })
        this.testMethod()
    }
    testMethod() {
        console.log()
    }
    render() {

        const { counter } = this.state
        const { title } = this.props

        return (
            <div>
                <h1>{title}</h1>
                <input type="number" value={counter} onChange={this.handleInputChange} />
                {/* <input type="number" value={counter} onChange={(event) => this.handleInputChange(event, counter)} /> */}

                <h2>New update : {counter}</h2>
            </div>
        )
    }
}

export default BigComp