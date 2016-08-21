/**
 * Created by Keno on 8/21/2016.
 */
import React, {PropTypes} from "react";

const Post = ({title, content, author}) => (
    <div className="single-post">
        <h2>{title}</h2>
        <p>{content}</p>
        <p>{author}</p>
    </div>);

Post.propTypes = {
    title:PropTypes.string.isRequired,
    content:PropTypes.string.isRequired,
    author:PropTypes.string.isRequired
};

export default Post;