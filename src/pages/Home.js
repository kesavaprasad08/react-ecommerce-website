import { Link } from "react-router-dom";

function HomePage() {
  return(
    <>
  <h1>home page</h1>
  <p>
    Go to <Link to='/store'>the Store</Link>
  </p>
  </>
  );
}

export default HomePage;
