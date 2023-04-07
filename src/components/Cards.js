import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Button, Card, CardGroup, Container, Row, Col  } from "react-bootstrap"
import "./cards.css"

export default function Cards(props) {
    return (
        <Row xs={2} md={8} className="g-6">
            {Array.from({ length:1 }).map((_, idx) => (
              <Col>
    <Card className = "Card p-2 m-3" style = {{width: '20rem', height: '30rem'}}>
        <Card.Img className = "card--image" variant="top" src= {props.image} 
        style = {{backgroundColor: "whitesmoke"}} />
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
                {props.description}
            </Card.Text>
            <Card.Text>
                {props.rating} ({props.ratedBy})
            </Card.Text>
            <Button variant="outline-dark"
            style = {{borderRadius: "25px"}}>Add to Cart</Button>
        </Card.Body>
    </Card>
    </Col>
          ))}
        </Row>
    )

    // return (
    //     <CardGroup>
    //       <Card>
    //         <Card.Img variant="top" src={props.image} />
    //         <Card.Body>
    //           <Card.Title>{props.name}</Card.Title>
    //           <Card.Text>
    //             {props.description}
    //           </Card.Text>
    //         </Card.Body>
    //         <Card.Footer>
    //           <small className="text-muted">{props.rating} ({props.ratedBy})</small>
    //         </Card.Footer>
    //       </Card>
    //       <Card>
    //         <Card.Img variant="top" />
    //         <Card.Body>
    //           <Card.Title>Card title</Card.Title>
    //           <Card.Text>
    //             This card has supporting text below as a natural lead-in to
    //             additional content.{' '}
    //           </Card.Text>
    //         </Card.Body>
    //         <Card.Footer>
    //           <small className="text-muted">Last updated 3 mins ago</small>
    //         </Card.Footer>
    //       </Card>
    //       <Card>
    //         <Card.Img variant="top" src="holder.js/100px160" />
    //         <Card.Body>
    //           <Card.Title>Card title</Card.Title>
    //           <Card.Text>
    //             This is a wider card with supporting text below as a natural lead-in
    //             to additional content. This card has even longer content than the
    //             first to show that equal height action.
    //           </Card.Text>
    //         </Card.Body>
    //         <Card.Footer>
    //           <small className="text-muted">Last updated 3 mins ago</small>
    //         </Card.Footer>
    //       </Card>
    //     </CardGroup>
    //   );
}
