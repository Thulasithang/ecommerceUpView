import React, { useState} from 'react'
import {Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import { Button, Card, CardGroup, Container, Row, Col } from "react-bootstrap"
import "./cards.css"


export default function Cards(props) {
    console.log(props)
    const [active, setActive] = useState(false);

    function handleClick () {
        setActive(!active);
    }

    return (
        <Row xs={2} md={8} className="g-6">
            {Array.from({ length:1 }).map((_, idx) => (
              <Col>
    <Card className = "Card p-2 m-3" style = {{width: '20rem', height: '30rem'}}>
        
        <Card.Img className = "card--image" variant="top" src= {props.image} 
        style = {{backgroundColor: "whitesmoke"}} />
        
        <Card.Body>
            <div className = "d-flex justify-content-between">
                <span><Card.Title>{props.name}</Card.Title></span>
                <span>${props.price} <sup>00</sup></span>
            </div>
            <Card.Text className = "text-muted" 
            style = {{fontSize: "15px"}}>
                {props.description} 
            </Card.Text>
            
            <Card.Text className = "text-muted">
                {props.rating} ({props.ratedBy})
            </Card.Text>
            <Button variant="outline-dark" className = "text-muted" onClick = {handleClick}
            style = {{borderRadius: "25px", backgroundColor: active ? "green" : "white"}}>Add to Cart</Button>
             {/* <button onclick="window.location='../components/SingleProduct.js';" value="click here" /> */}

        </Card.Body>
    </Card>
    </Col>
          ))}
        </Row>
    )
}
