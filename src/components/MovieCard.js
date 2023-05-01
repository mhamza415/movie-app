import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const MovieCard = ({ movie: { imdbID, Year, Type, Title, Poster } }) => {
  return (
    <div>
      <Row >
        <Col className="my-5">
          <div className="wrapper ">
            <h1>{`This movie ${Title} was publish in ${Year}` }</h1>

            <Card key={imdbID} className=" bg-white hover card">
              <Card.Img
                variant="top"
                src={Poster}
                className="image"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/400x500?text=${Title}`;
                }}
                alt="Title"
              ></Card.Img>

              <Card.Body className="bg-dark rounded">
                <Card.Title>{Title}</Card.Title>
                <h5>{Type}</h5>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MovieCard;
