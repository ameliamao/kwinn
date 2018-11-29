import React, { Component } from 'react';
import classes from  './Footer.css';
import './Footer.css';
import { connect } from 'react-redux';
import {Redirect, withRouter} from 'react-router-dom';


class Footer extends Component{
    constructor(props) {
        super(props);
        this.state = {};
        
    }


    render() {
        return(<div className = 'Container'>
            
            
           
            
            </div>)
    }


}

const mapStateToProps = (state) => {
    return {
        articles: state.main.articles,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getArticles: () => dispatch(actions.getArticles()),
    };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Footer));