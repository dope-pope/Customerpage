import React, { Component } from 'react';
import { Navbar, NavbarBrand, Card, Button, CardBody, CardImg, CardGroup, CardText, CardDeck,  CardImgOverlay, CardFooter, CardHeader } from 'reactstrap';
import Avatar from '@material-ui/core/Avatar';
import { CUSTOMERS } from './data/customer';
import { GridList, Grid } from '@material-ui/core';
import './customer.css';

class Customer extends Component {

    constructor(props) {
        super(props);

        this.state = { cusotmers: CUSTOMERS };
    }
    render() {
        const cust = this.state.cusotmers.map((customer) => {
            return (
                <div className="col-12 col-md-5 page">
                    <Card className="card">
                        <div className="row ml-4">
                            <Avatar alt="Remy Sharp" src={customer.dp} />
                            <h5 className="name"> {customer.name}</h5>
                        </div>
                       <CardBody>
                            <CardImg src={customer.image} alt={customer.name} />
                            <p className="p">{customer.description}</p>
                          </CardBody>   
                        <div className="row ml-4 col-12 t">
                            <button type="button" class="btn btn-info ">Accept</button>
                            <button type="button" class="btn btn-secondary btn2">Reject</button>
                        </div>
                    </Card>

                </div>
            );

        });

        return (
            <div className="car">
                <div className="row">
                    {cust}
                </div>
                <div className="row">
                </div>
            </div>
        );
    };
}
    



export default Customer;