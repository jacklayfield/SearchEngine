import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export const ImageGrid = ({ imageData }) => {
  // Creating a chunking function to chunk array into "rows"
  const chunkArray = (inputArray, perChunk) => {
    const array = inputArray.slice();
    const chunks = [];
    while (array.length) chunks.push(array.splice(0, perChunk));
    return chunks;
  };

  return (
    <div className="p-5">
      <Container>
        {chunkArray(imageData, 3).map((row, i) => (
          <Row>
            {row.map((image, i) => {
              return (
                <Col key={i}>
                  <div className="p-1">
                    <Link to="/imageDetails" state={{ data: image }}>
                      <img
                        className="h-64 w-full object-cover"
                        src={image.largeImageURL}
                        alt={image.tags}
                      />
                    </Link>
                  </div>
                </Col>
              );
            })}
          </Row>
        ))}
      </Container>{" "}
    </div>
  );
};
