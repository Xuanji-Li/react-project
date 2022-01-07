import React from 'react';

class DigitalCloud extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            date: new Date()
        };
    }
    componentDidMount() {
        this.time=setInterval(() =>{ 
            this.setState({
                date:new Date()
            })
        },1000)
    }
    componentDidUpdate(currentProps,currentState){
        console.log(currentState)
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render() {
        return(
            <div className="digital-Clock-component jumbotron">
                <h1>{this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
    }
}

export default DigitalCloud;