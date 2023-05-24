import { Button, Container, Navbar, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import EStoreFooter from "../components/layout/EStoreFooter";

function HomePage() {
  return (
    <>
      <header>
        <Navbar style={{ backgroundColor: "black" }} expand="sm" variant="dark">
          <Container>
            <ul>
              <li>
                <Link to="/" style={{ color: "white" }}>
                  HOME
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/store" style={{ color: "white" }}>
                  STORE
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/about" style={{ color: "white" }}>
                  ABOUT
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/contactus" style={{ color: "white" }}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </Container>
        </Navbar>
      </header>
      <Container
        fluid
        className="bg-secondary text-center"
        style={{
          backgroundColor: "grey",
          border: "2px solid",
          borderColor: "white",
        }}
      >
        <p
          style={{ fontSize: "129px", color: "white" }}
          className="text-center"
        >
          The Generics
        </p>
        <Button
          variant="secondary"
          style={{ border: "1px solid", borderColor: "#56CCF2" }}
        >
          Get Our Latest Album
        </Button>
        <br />
        <Button
          variant="secondary"
          style={{
            border: "1px solid",
            borderColor: "#56CCF2",
            borderRadius: "50%",
            margin: "20px",
            color: "#56CCF2",
          }}
        >
          ►
        </Button>
      </Container>
      <h1
        style={{
          textAlign: "center",
          padding: "20px",
          fontFamily: "Metal Mania",
        }}
      >
        TOURS{" "}
      </h1>
      <Table style={{ textAlign: "center", boxSizing: "border-box" }}>
        <tbody>
          <tr>
            <td>JUL 16</td>
            <td>DETROIT, MI</td>
            <td>DTE ENERGY MUSIC THEATRE</td>
            <td>
              <Button variant="info" style={{ color: "white" }}>
                BUY TICKETS
              </Button>
            </td>
          </tr>
          <tr>
            <td>JUL 19</td>
            <td>TORONTO,ON</td>
            <td>BUDWEISER STAGE</td>
            <td>
              <Button variant="info" style={{ color: "white" }}>
                BUY TICKETS
              </Button>
            </td>
          </tr>
          <tr>
            <td>JUL 22</td>
            <td>BRISTOW, VA</td>
            <td>JIGGY LUBE LIVE</td>
            <td>
              <Button variant="info" style={{ color: "white" }}>
                BUY TICKETS
              </Button>
            </td>
          </tr>
          <tr>
            <td>JUL 29</td>
            <td>PHOENIX, AZ</td>
            <td>AK-CHIN PAVILION</td>
            <td>
              <Button variant="info" style={{ color: "white" }}>
                BUY TICKETS
              </Button>
            </td>
          </tr>
          <tr>
            <td>AUG 2</td>
            <td>LAS VEGAS, NV</td>
            <td>T-MOBILE ARENA</td>
            <td>
              <Button variant="info" style={{ color: "white" }}>
                BUY TICKETS
              </Button>
            </td>
          </tr>
          <tr>
            <td>AUG 7</td>
            <td>CONCORD, CA</td>
            <td>CONCORD PAVILION</td>
            <td>
              <Button variant="info" style={{ color: "white" }}>
                BUY TICKETS
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>

      <EStoreFooter />
    </>
  );
}

export default HomePage;
