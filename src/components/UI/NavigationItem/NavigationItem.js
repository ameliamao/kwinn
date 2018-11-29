import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classes from  './NavigationItem.css';
import './NavigationItem.css';

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



export default NavigationItem;