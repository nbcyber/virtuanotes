import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { NoteCard } from "../../../components/NoteCard";
import { ObjectivesComponent } from "../../../components/Objectives";
import { useState } from "react";

export const ELNIntroPage = () => {
  const [objectives, setObjectives] = useState(["Define network management principles", "Define guidelines for implementation of network management tools and technologies", "Define the layers of the Cisco model", "Analyze boot process and startup config", "Define the Cisco Internetwork Operating System (IOS)", "Analyze ISO access methods", "Identify User and Configuration modes"]);
  return (
    <Container>
      <ObjectivesComponent objectives={objectives}/>
      {/* objectives component */}

      <Row></Row>
    </Container>
  );
};
