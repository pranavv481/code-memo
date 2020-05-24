import React, { Component } from 'react'
import MemoComp from './MemoComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'vishwas'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'vishwas'
            })
        }, 2000)
    }

    render() {
        console.log("***********Parent Component Render****************")
        return (
            <div>
                Parent Component
                <MemoComp name={this.state.name} />


            </div>
        )
    }
}

export default ParentComp
