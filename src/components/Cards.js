import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Button, Card, CardGroup, Container, Row, Col  } from "react-bootstrap"
import "./cards.css"

export default function Cards(props) {
    return (
    <CardGroup className = "cardGroup">
    <Card className = "Card md=4 m-3 " style={{ width: "250px" }}>
        <Card.Img variant="top" src= {props.image} 
        style = {{backgroundColor: "whitesmoke"}} />
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
                {props.description}
            </Card.Text>
            <Card.Text>
                {props.rating} ({props.ratedBy})
            </Card.Text>
            <Button variant="primary">Add to Cart</Button>
        </Card.Body>
    </Card>
    </CardGroup>

    )
}