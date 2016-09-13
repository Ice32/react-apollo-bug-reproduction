/**
 * Created by Keno on 8/21/2016.
 */
import React, {PropTypes} from  "react";
import {connect} from "react-redux";
import Post from "../post/Post";
import {bindActionCreators} from "redux";
import {graphql} from "react-apollo";
import gql from "graphql-tag";
import { withApollo } from 'react-apollo';

class PostsList extends React.Component {
    static propTypes = {};

    constructor(props, context) {
        super(props, context);
    }

    render() {
        console.log(this.props.data);
        if(this.props.data.loading){
            return(<div>Loading...</div>)
        }
        const postsList = this.props.data.posts.map(post => {
           return(
               <Post key={post._id} title={post.title} content={post.content} author={post.author}/>
           );
        });
        return (
            <div id="posts-list">
                {postsList}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log("state in mapStateToProps", state);
    return{
        state: state
    };
};
const postsQuery =gql`{posts{title, author, content, _id}}`;
PostsList = connect(mapStateToProps)(PostsList);
export default graphql(postsQuery)(PostsList);
