import { Card, Col } from "react-bootstrap";

export const NoteCard = ({title, description}) => {
    return (
        <Col>
        <Card className="note-card mb-3" onClick={null} style={{cursor: "pointer" }}>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                Some quick example text to build on the  and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    );
}