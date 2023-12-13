import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { NoteCard } from "../../components/NoteCard";


export const EnterpriseLevelNetworking = () => {
  return (
    <Container>
      <Row className="mb-3">
        <Col>
          <h1>Enterprise Level Networking</h1>
        </Col>
      </Row>
      <Row md={3}>
 <NoteCard title={"ELN Introduction"}/>
 <NoteCard title={"Switch Concepts"}/>
 <NoteCard title={"IP Routing"}/>
 <NoteCard title={"Protecting Networks"}/>
 <NoteCard title={"Access Control Lists"}/>
 <NoteCard title={"Deny Specific Attacks"}/>
 <NoteCard title={"Network Tunneling"}/>
 <NoteCard title={"Network Address"}/>





      </Row>
    </Container>
  );
};