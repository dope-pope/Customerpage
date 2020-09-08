import React, { Component } from 'react';
import { Navbar, NavbarBrand, Card, Button, CardBody, CardImg } from 'reactstrap';
import Avatar from '@material-ui/core/Avatar';
import { CUSTOMERS } from './data/customer';

import './customer.css';

class Customer extends Component {

    constructor(props) {
        super(props);

        this.state = { cusotmers: CUSTOMERS };
    }
    render() {
        const cust = this.state.cusotmers.map((customer) => {
            return (
                <div className=" col-md-6 page container">
                    <Card className="card">
                        <div className="row ml-4 img">
                            <Avatar alt="Remy Sharp" src={customer.dp} />
                            <h5 className="name"> {customer.name}</h5>
                        </div>
                        <CardBody>
                            <CardImg className="res" src={customer.image} alt={customer.name} />
                            <p className="des">{customer.description}</p>
                          </CardBody>   
                        <div className="row ">
                            <button type="button" class="btn btn-info ml-5">Accept</button>
                            <button type="button" class="btn btn-secondary btn2">Reject</button>
                        </div>
                    </Card>

                </div>
            );

        });

        return (
            <div className="car container">
                <div className="row ">
                    {cust}
                </div>
                <div className="row">
                </div>
            </div>
        );
    };
}
    



export default Customer;