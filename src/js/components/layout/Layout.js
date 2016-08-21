/**
 * Created by Keno on 8/21/2016.
 */
import React, {PropTypes} from  "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Header from "./Header";
import Footer from "./Footer";
import Frontpage from "../frontpage/Frontpage";

class Layout extends React.Component {
    static propTypes = {};

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <Header/>
                <Frontpage/>
                <Footer></Footer>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    state: state
});


export default connect(mapStateToProps)(Layout);