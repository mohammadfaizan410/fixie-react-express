import React from 'react';
import { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import '../styles/booknow.css';

function BookNow() {
  const [filters, setFilters] = useState([
    {
      'Service': ['Plumbing', 'Electricity', 'Gardening', 'House Cleaning', 'Mechanic']
    },
    {
      'Price': ['Highest to Lowest', 'Lowest to Highest']
    },
    {
      'Rating': ['Order by highest rating']
    }
  ])

  const [workers, setWorkers] = useState([
    {
      worker_id: '1',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Steve_Jobs_Headshot_2010-CROP2.jpg/640px-Steve_Jobs_Headshot_2010-CROP2.jpg',
      name: 'Steve Jobs',
      occupation: 'Plumber',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci minus quas eaque cupiditate mollitia laudantium atque enim quia vero, pariatur tempora animi sequi molestiae libero deserunt consequatur sint laboriosam. Alias itaque ab vero perspiciatis neque tempore aliquam, dicta voluptates quidem eveniet voluptatum vitae est illum placeat. Accusantium repellat impedit dignissimos.'
    },
    {
      worker_id: '2',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg',
      name: 'Elon Musk',
      occupation: 'Electrician',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci minus quas eaque cupiditate mollitia laudantium atque enim quia vero, pariatur tempora animi sequi molestiae libero deserunt consequatur sint laboriosam. Alias itaque ab vero perspiciatis neque tempore aliquam, dicta voluptates quidem eveniet voluptatum vitae est illum placeat. Accusantium repellat impedit dignissimos.'
    },
    {
      worker_id: '3',
      image: 'https://imageio.forbes.com/specials-images/imageserve/5c76b7d331358e35dd2773a9/0x0.jpg?format=jpg&crop=4401,4401,x0,y0,safe&height=416&width=416&fit=bounds',
      name: 'Mark Zuckerberg',
      occupation: 'Lizard',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci minus quas eaque cupiditate mollitia laudantium atque enim quia vero, pariatur tempora animi sequi molestiae libero deserunt consequatur sint laboriosam. Alias itaque ab vero perspiciatis neque tempore aliquam, dicta voluptates quidem eveniet voluptatum vitae est illum placeat. Accusantium repellat impedit dignissimos.'
    }
  ])

  return (
    <div className='booknow-container'>
        <div className='left-filter'>
        {filters.map(function(filter, index){
          const filterName = Object.keys(filter)[0]
                return (
                <Accordion className="filter-accordion">
                    <Accordion.Item eventKey={index}>
                        <Accordion.Header>{ filterName }</Accordion.Header>
                        <Accordion.Body>
                          { filter[filterName].map(subFilter => {
                            return (
                              <div>
                                <input type='checkbox' name={subFilter} />
                                <label for={subFilter}>{ subFilter }</label>
                              </div>
                            )
                          }) }
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                )
            })}
        </div>
        <div className='workers-container'>
            <input type='text' placeholder='&#x1F50E; Search Worker' className='search-bar'/>
            {workers.map(function(worker, index){
              return (
                <div className='worker-container'>
                  <img src={worker.image} />
                  <div className='worker-info-container'>
                    <h5>{worker.name}</h5>
                    <h6>{worker.occupation}</h6>
                    <p>{worker.description}</p>
                  </div>
                </div>
              )
            })}
        </div>
    </div>
  )
}

export default BookNow