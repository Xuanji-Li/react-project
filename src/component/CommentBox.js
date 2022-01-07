import React from 'react'

class CommentBox extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            value:''
        }
        // this.handleChange=this.handleChange.bind(this)
    }
    handleChange(event){
        this.setState({
            value: event.target.value
        })
    }
    handleSubmit(event){
        alert(this.state.value)
        event.preventDefault()
    }
    render() {
        return (
            <form className="p-5" onSubmit={(event)=>{this.handleSubmit(event)}} >
                <div className="form-group">
                    <label>留言内容</label>
                    <input
                    type="text"
                    className="form-control"
                    onChange={(event)=>{this.handleChange(event)}}
                    //  onChange={this.handleChange}
                    value={this.state.value}>

                    </input>
                </div>
                <button type="submit" className="btn btn-primary">submit</button>
            </form>
        )
    }
}
export default CommentBox;