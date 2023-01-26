import React from 'react';
import "../styles/home.css";
import Button from './Button';
import { useStoreState } from 'easy-peasy';

function Home() {
  const userStore = useStoreState((state) => state.userStore);
  console.log(userStore);
  return (
    <div className='home-container'>
          <div className='description'>
              <h1>get all your problems fixed with Fixie</h1>
              <p>This is the best place for you to get all your plumbing activities carried
                  out without any hasle or jhonny sins
              </p>
              <Button
                  value="learn more"
                  background='black'
                  type="button"
              />
          </div>
          <div className='home-image'>
              <img src='https://media.angi.com/s3fs-public/plumber-fixing-sink.jpeg?impolicy=leadImage'></img>
          </div>
    </div>
  )
}

export default Home