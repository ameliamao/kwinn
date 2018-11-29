import React, { Component } from 'react';
import classes from  './NavigationItems.css';
import './NavigationItems.css';
import NavItem from '../NavigationItem/NavigationItem';
import { connect } from 'react-redux';
import {Redirect, withRouter} from 'react-router-dom';


class NavigationItems extends Component{
    constructor(props) {
        super(props);
        this.state = {};
        
    }


    render() {
        return(<div className = {'Container'}>
            
          { (this.props.isAuthenticated) ? <NavItem link = {""} name = {"home"}/> : null }
           
            
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavigationItems));