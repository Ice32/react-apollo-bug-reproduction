/**
 * Created by Keno on 8/21/2016.
 */
import React, {PropTypes} from  "react";
import {connect} from "react-redux";
import Post from "../post/Post";
import {bindActionCreators} from "redux";

class PostsList extends React.Component {
    static propTypes = {};

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div id="posts-list">
                <Post title="prvi" content="Lorem ipsum" author="Kenan"/>
                <Post title="drugi" content="Lorem ipsum" author="Kenan"/>
                <Post title="treci" content="Lorem ipsum" author="Kenan"/>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    state: state
});



export default connect(mapStateToProps)(PostsList);