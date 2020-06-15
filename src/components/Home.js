import React, { Component } from 'react';
import {Link} from 'react-router-dom'
//

class Home extends Component{
    
    state = {
        posts:[]
    }

    componentDidMount(){

        /*axios-al
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res);
        });*/

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            //console.log(json);
            this.setState({
                posts: json.slice(0, 10)
            })
        });
    }

    render(){
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                                <span className="card-title">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">
                No posts yet!
            </div>
        );
        
        return (
            <div className="container">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}
export default Home;