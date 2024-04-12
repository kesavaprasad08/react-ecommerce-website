import { Button, Container, Table } from "react-bootstrap";
import EStoreFooter from "../components/layout/EStoreFooter";
import MainHeader from "../components/MainHeader";

function HomePage() {
  return (
    <>
      <MainHeader />
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
          The Genericas
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
      <div style={{ marginLeft:'200px', marginRight:'100px'}}>
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
      </div>

      <EStoreFooter />
    </>
  );
}

export default HomePage;
