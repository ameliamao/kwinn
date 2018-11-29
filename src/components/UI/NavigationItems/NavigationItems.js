import React, { Component } from 'react';
import classes from  './NavigationItems.css';
import './NavigationItems.css';
import NavItem from '../NavigationItem/NavigationItem';

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

export default NavigationItems;