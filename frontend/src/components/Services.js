import React from 'react';
import { useState } from 'react';
import { Card, Button, Row } from 'react-bootstrap';
import '../styles/services.css';

function Services() {

    const [services, setServices] = useState([
        {
            title: "Plumbing",
            img: "https://www.betterteam.com/images/plumber-job-description-3999x2999-20201118.jpeg?crop=40:21,smart&width=1200&dpr=2"
        },
        {
            title: "Electricity",
            img: "https://www.build-review.com/wp-content/uploads/2022/03/Electrician.jpg"
        },
        {
            title: "Gardening",
            img: "https://i.guim.co.uk/img/media/ef96c1f2495b60ec83379962d4aec38bfb1ce039/0_187_5600_3363/master/5600.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=a96e7cb435ac3a89558b8315d39c068d"
        },
        {
            title: "House Cleaning",
            img: "https://nextdaycleaning.com/wp-content/uploads/2020/06/Main-Benefits-of-Residential-Cleaning-Services-1024x663.jpg"
        },
        {
            title: "Mechanic",
            img: "https://media.cnn.com/api/v1/images/stellar/prod/220721175751-woman-mechanic-stock.jpg?c=original"
        },
    ])

  return (
    <div className='services-page'>
        <div className='services-container'>
          <div className='services-description'>
              <h1>All the services that you need for your home or office!</h1>
              <p>This is the best place for you to get all your plumbing activities carried
                  out without any hasle or jhonny sins
              </p>
          </div>
          <div className='services-image'>
              <img src='https://media.istockphoto.com/id/536295730/vector/ecological-house-cutaway-infographic-design.jpg?s=612x612&w=0&k=20&c=0q3f81NZ7qOFEn2eK4WKF1IgxmMllt6eRhyxeIOPYX8='></img>
          </div>
        </div>
        <div className='flex flex-wrap services'>
            {services.map(function(service){
            return (   
        <Card className="services-card mb-5" style={{ width: '22rem' }}>
            <Card.Img className="services-card-image" variant='top' src={service.img} alt={service.title}/>
            <Card.Body>
                <Card.Title>{ service.title }</Card.Title>
                <Card.Text>
                    Check out all the { service.title.toLowerCase() } services!
                </Card.Text>
                        <Button variant="outline-secondary" >{ service.title }</Button>
            </Card.Body>
        </Card>
        )
            })}
        </div>
    </div>
  )
}

export default Services