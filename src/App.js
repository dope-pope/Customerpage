import React, { Component } from 'react';
import { Navbar, NavbarBrand, Card, Button, CardBody, CardImg, CardTitle, CardText, CardImgOverlay, CardFooter, CardHeader } from 'reactstrap';
import './App.css';
import { COSTUMERS } from './data/costumer';
import Avatar from '@material-ui/core/Avatar';




const App = () => (
    <div className="costumer ">

        {COSTUMERS.map((costumer) => {
            return (
                
                <div className="costumers ">
                    <div className="row header  mt-5 ml-3">
                        <Avatar alt="Remy Sharp" src={costumer.dp} />
                        <p className="name"> {costumer.name}</p>
                    </div>
                    <div className=" img  ">
                        <img src={costumer.image} alt={costumer.name} />
                    </div>
                    <div className="  description ">
                        <p id="des">{costumer.description}</p>
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
