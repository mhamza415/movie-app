import React from "react";
import MovieCard from "./MovieCard";
import { Container, InputGroup, Form, Row, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { GoSearch } from "react-icons/go";



const MovieSite = () => {
  const [searchTerm, setSearchTerm] = useState('');
  // http://www.omdbapi.com/?apikey=84969b9d
    const URL = "http://www.omdbapi.com/?apikey=84969b9d";
    const [searchedData, setSearchedData] = useState([]);

    
    const searchApi = async (title) => {
      const response = await fetch(`${URL}&s=${title}`);
      const data = await response.json();
      setSearchedData(data.Search);
    };
    useEffect(() => {
      searchApi("spiderman");
    }, []);
  const handleSearch = (e) => {
    e.preventDefault()
    searchApi(searchTerm);
  }

  // const movie = {
  //   Poster:
  //     "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
  //   Title: "Italian Spiderman",
  //   Type: "movie",
  //   Year: "2007",
  //   imdbID: "tt2705436",
  // };

  return (
    <Container>
      <h1 className="text-center mt-5 text">Movie Land</h1>
      <Form onSubmit={handleSearch}>
        <Form.Group>
          <InputGroup>
            <Form.Control
              value={searchTerm}
              placeholder="Search for movie"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
            <Form.Text>
              <Button variant="dark" className="mx-1" type="submit">
                <GoSearch className="fs-1" />
              </Button>
            </Form.Text>
          </InputGroup>
        </Form.Group>
      </Form>
      <Row>
        {searchedData?.length > 0 ? (
          searchedData.map((movie) => (
            <Col md={6} lg={4}>
              <MovieCard movie={movie} />
            </Col>
          ))
        ) : (
          <p style={{marginTop: "2rem"}}>An Error occurd no data to display</p>
        )}
      </Row>
    </Container>
  );
};
export default MovieSite;
