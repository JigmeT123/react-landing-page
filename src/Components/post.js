import React, {Component} from 'react';
import {connect} from 'react-redux';

class Post extends Component {
    handleClick = (e) => {
        this.props.deletePost(this.props.posts.id);
        this.props.history.push('/');
    }
    render() {
        const {posts} = this.props;
        const post = posts
            ? (
                <div className="post card">
                    <div className="card-content">
                        <div className="card-title">{posts.title}</div>
                        <p>{posts.body}</p>
                    </div>
                    <div className='center'>
                        <button className="btn red" onClick={this.handleClick}>DELETE</button>
                    </div>

                </div>
            )
            : (<div className='center'>Loading Post</div>);

            return (
                <div className="container">
                    {post}
                </div>
            )
    }
}
const mapsStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        posts: state
            .posts
            .find(res => {
                return res.id === id;
            })
    }
}

const mapsDispatchToProps = (dispatch) => {
    return {
        deletePost: (id)=> (dispatch({type: 'DELETE_POST', id}))
    }
}
export default connect(mapsStateToProps, mapsDispatchToProps)(Post);