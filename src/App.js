import React, { Component } from 'react';
import { Navbar, NavbarBrand, Card, Button, CardBody, CardImg, CardTitle, CardText, CardImgOverlay, CardFooter, CardHeader } from 'reactstrap';
import './App.css';
import { CUSTOMERS } from './data/customer';
import Avatar from '@material-ui/core/Avatar';




const App = () => (
    <div className="customer col-12">

        {CUSTOMERS.map((customer) => {
            return (
                
                <div className="customers ">
                    <div className="row header  mt-5 ml-3">
                        <Avatar alt="Remy Sharp" src={customer.dp} />
                        <p className="name"> {customer.name}</p>
                    </div>
                    <div className=" img  ">
                        <img src={customer.image} alt={customer.name} />
                    </div>
                    <div className="  description ">
                        <p id="des">{customer.description}</p>
                    </div>
                    <div className=" button">
                        <button type="button" class="btn btn-info">Accept</button>
                        <button type="button" class="btn btn-secondary btn2">Reject</button>
                    </div>
                    </div>
                   
            )
        })};

    </div>

)
export default App;
