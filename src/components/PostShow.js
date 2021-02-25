import React from 'react'

class PostShow extends React.Component {
    render() {
        return(
            <div className="mymodal">
                <div className="mymodalcontent">
                <div className="card">
                    <div className="title">
                        <h4> {this.props.postData.title} </h4>
                    </div>
                    <div className="body">
                        <p> {this.props.postData.body} </p>
                    </div>
                    <button onClick={this.launchEdit}>Edit</button>
                    <button onClick={() => {this.props.deletePost(this.props.postData._id, this.props.postData.city)}}>Delete!</button>
                    <button onClick={this.props.closeForm}>Close</button>
                    </div>
                </div>
            </div>
            
        )
    }
}
export default PostShow