import MainHeader from "../../components/MainHeader";
import classes from "./Products.module.css";
const Colors = () => {
  return (
    <>
      <MainHeader />

      <div className={classes.flexContainer}>
        <img
          src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
          alt="color"
        ></img>

        <div className={classes.product}>
          <h2>Colors</h2>
          <p>Merch List</p>
          <h3>₹100</h3>
          <h5>4.25/5 *</h5>
          <p>13,031 ratings and 1,354 reviews</p>
          <hr />
          <div
            style={{
              border: "1px solid black",
              padding: "5px",
              borderRadius: "5px",
            }}
          >
            <h4>Ratings and Reviews</h4>
            <p> 4* 13,031 ratings and 1,354 reviews</p>
            <div
              style={{
                width: "300px",
                borderRadius: "5px",
              }}
            >
              <h5>4* Love it</h5>
              <p>Ritu Pragyan</p>
            </div>
            <hr />
            <div>
              <h5>3* Nice</h5>
              <p>Sarfarz Ashraf</p>
            </div>
            <hr />
            <div>
              <h5>4* Nice one</h5>
              <p>4Nice one Arif Mondal</p>
            </div>
            <hr />
            <div>
              <h5>4* Love it</h5>
              <p>Ritu Pragyan</p>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default Colors;
