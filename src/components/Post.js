import React, { Component } from 'react'

class Post extends Component {

    state = {
        post: null
    }

    componentDidMount(){
        let id = this.props.match.params.post_id;

        fetch('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(response => response.json())
        .then(json => {
            this.setState({
                post: json
            });
            
        })  
    }

    render() {
        const post = this.state.post ? (
            <div className="post">
                <h4 className='center'>{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
            </div>
        ) : (
            <div className='center'>Loading post...</div>
        );

        return(
            <div className='container'>
                { post }
            </div>
        )
    }
}
export default Post;



