import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ClickEvent from "./ClickEvent";

// import Books from "./Books.json";

const LibraryCard = ({ element }) => {

  const {
    thumbnailUrl,
    title,
    shortDescription,
    isbn,
    authors,
    publishedDate,
    categories,
  } = element;

  return (
    <>

      {/* First method */}
      {/* <div className="row justify-content-between">
        {Books.map((element) => (
          <Card style={{ width: "25rem" }} key={element._id} className="align-items-center">
            <Card.Img
            className="w-50"
              variant="top"
              src={element.thumbnailUrl}
              alt={element.title}
            />
            <Card.Body>
              <Card.Title>{element.title}</Card.Title>
              <Card.Text>{element.shortDescription}</Card.Text>
              <Card.Title>ISBN: {element.isbn}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {element.authors.join(", ")}
              </Card.Subtitle>
              <Card.Text>
                Published Date:{" "}
                {new Date(element.publishedDate.$date).toLocaleDateString()}
              </Card.Text>
              <Button variant="primary">
                Categories: {element.categories.join(", ")}
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div> */}

      

      {/* Second method */}
      <Card style={{ width: "25rem" }} className="align-items-center">
        <Card.Img
          className="w-50"
          variant="top"
          src={thumbnailUrl}
          alt={title}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{shortDescription}</Card.Text>
          <Card.Title>ISBN: {isbn}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {authors.join(", ")}
          </Card.Subtitle>
          <Card.Text>
            Published Date: {new Date(publishedDate.$date).toLocaleDateString()}
          </Card.Text>
          <Button variant="primary">Categories: {categories.join(", ")}</Button>
          <br/>
          <ClickEvent/>
        </Card.Body>
      </Card>
     


    </>
  );
};

export default LibraryCard;
