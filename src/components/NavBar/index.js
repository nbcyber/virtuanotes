import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const MainNav = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/">CBTC Visuanotes</Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Computer Architecture" disabled>
              <NavDropdown.Item href="">Data Representation</NavDropdown.Item>
              <NavDropdown.Item href="">CPU Architecture</NavDropdown.Item>
              <NavDropdown.Item href="">Multiprocessing</NavDropdown.Item>
              <NavDropdown.Item href="">I/O</NavDropdown.Item>
              <NavDropdown.Item href="">Memory Architecture</NavDropdown.Item>
              <NavDropdown.Item href="">ARM Architecture</NavDropdown.Item>
              <NavDropdown.Item href="">X86 Architecture</NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown title="Operating Systems" disabled>
              <NavDropdown.Item href="">OS Fundamentals</NavDropdown.Item>
              <NavDropdown.Item href="">Windows Characteristics</NavDropdown.Item>
              <NavDropdown.Item href="">Linux Characteristics</NavDropdown.Item>
              <NavDropdown.Item href="">Boot & File Systems</NavDropdown.Item>
              <NavDropdown.Item href="">Agnostic OS Principles</NavDropdown.Item>
              <NavDropdown.Item href="">Memory Management Drivers</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Network Protocols" disabled>
              <NavDropdown.Item href="">Network Fundamentals</NavDropdown.Item>
              <NavDropdown.Item href="">Transmission Signaling</NavDropdown.Item>
              <NavDropdown.Item href="">OSI Model</NavDropdown.Item>
              <NavDropdown.Item href="">Subnetting Concepts</NavDropdown.Item>
              <NavDropdown.Item href="">Network Addressing</NavDropdown.Item>
              <NavDropdown.Item href="">Network Devices</NavDropdown.Item>
              <NavDropdown.Item href="">WAN Fundamentals</NavDropdown.Item>
              <NavDropdown.Item href="">Network & Transport Layer</NavDropdown.Item>
              <NavDropdown.Item href="">Application Layer</NavDropdown.Item>
              <NavDropdown.Item href="">IPSEC, Data SEC, and Virtual Net</NavDropdown.Item>
              <NavDropdown.Item href="">Network Security</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="ELN">
              <NavDropdown.Item href="">Introduction</NavDropdown.Item>
              <NavDropdown.Item href="">Switch Concepts</NavDropdown.Item>
              <NavDropdown.Item href="">IP Routing</NavDropdown.Item>
              <NavDropdown.Item href="">Protecting Networks</NavDropdown.Item>
              <NavDropdown.Item href="">ACLs</NavDropdown.Item>
              <NavDropdown.Item href="">Deny Specific Attacks</NavDropdown.Item>
              <NavDropdown.Item href="">Network Tunneling</NavDropdown.Item>
              <NavDropdown.Item href="">Network Address Translation</NavDropdown.Item>

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

