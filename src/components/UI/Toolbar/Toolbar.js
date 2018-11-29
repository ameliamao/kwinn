import React, { Component } from 'react';
import classes from  './Toolbar.css';
import './Toolbar.css';
import NavItems from '../NavigationItems/NavigationItems';
import { connect } from 'react-redux';
import {Redirect, withRouter} from 'react-router-dom';




class Toolbar extends Component{
    constructor(props) {
        super(props);
        this.state = {};
        
    }

    

    render() {
        return(<div className = {'Container'}>
            
            <NavItems auth  = {this.props.isAuthenticated}/>
           
            
            </div>)
    }


}

export default Toolbar;const mapStateToProps = (state) => {
    return {
        articles: state.main.articles,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getArticles: () => dispatch(actions.getArticles()),
    };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Toolbar));