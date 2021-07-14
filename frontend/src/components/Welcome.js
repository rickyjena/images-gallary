import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const Welcome = () => (
  <Jumbotron>
    <h1> Ricky's Images Gallery</h1>
    <p>
      This is a simple web application that retrieves phots using Unsplash API.
      In order to start you may type in any search word in the search bar.
    </p>
    <p>
      <Button variant="primary" href="https://unsplash.com" target="blank">
        Learn More
      </Button>
    </p>
  </Jumbotron>
);

export default Welcome;
