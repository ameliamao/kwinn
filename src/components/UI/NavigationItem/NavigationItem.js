import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classes from  './NavigationItem.css';
import './NavigationItem.css';
import { connect } from 'react-redux';
import {Redirect, withRouter} from 'react-router-dom';


class NavigationItem extends Component{
    constructor(props) {
        super(props);
        this.state = {};
        
    }

    componentDidUpdate(){}

    render() {
        return(<div className = {'Container'}>
            
            <li className = {classes.NavigationItem}>
            <NavLink
                to = {this.props.link}
                exact
                activeClassName = {'Container'}
                title = {this.props.name}
                >
                {this.props.name}
            
            </NavLink>
        </li>
            
            </div>)
    };
};


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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavigationItem));