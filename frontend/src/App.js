import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Searchbar from './components/Search';
import ImageCard from './components/ImageCard';
import Welcome from './components/Welcome';
import { Container, Row, Col } from 'react-bootstrap';

const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:5050';

const App = () => {
  const [word, setWord] = useState('');
  const [images, setImages] = useState([]);

  const getSavedImages = async () => {
    try {
      const res = await axios.get(`${API_URL}/images`);
      setImages(res.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => getSavedImages(), []);

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    console.log('sending fetch request');
    try {
      const res = await axios.get(`${API_URL}/new-image?query=${word}`);
      console.log('adding found image to the state');
      setImages([{ ...res.data, title: word }, ...images]);
    } catch (error) {
      console.log(error);
    }
    console.log('clearing search bar');
    setWord('');
  };

  const handleDeleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  return (
    <div>
      <Header title="Ricky's Images Gallery" />
      <Searchbar
        word={word}
        setWord={setWord}
        handleSubmit={handleSearchSubmit}
      />
      <Container>
        {images.length ? (
          <Row xs={1} md={2} lg={3}>
            {images.map((image, i) => (
              <Col key={i} className="pb-3">
                <ImageCard image={image} deleteImage={handleDeleteImage} />
              </Col>
            ))}
          </Row>
        ) : (
          <Welcome />
        )}
      </Container>
    </div>
  );
};

export default App;
