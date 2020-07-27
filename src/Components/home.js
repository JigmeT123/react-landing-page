import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
class Home extends Component{
    render(){
        const {posts} = this.props;
        const arr = posts.length?(
            posts.map(post=>{
                return(
                <div className="card" key={post.id}>
                    <div className="card-content">
                    <NavLink to={'/'+ post.id}><div className="card-title">{post.title}</div></NavLink>
               <p>{post.body}</p>
                </div>
            </div>
                );
            })
        ):(
            <div className='center'>Content not yet posted</div>
        )
        return(
            
            <div className="container">
                {arr}
            </div>
        )
    }
}
const mapsStateToProps = (state) => {
    return{
        posts: state.posts
    }
}

export default connect(mapsStateToProps)(Home);