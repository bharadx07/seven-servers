import React from "react";
import {Link} from "react-router-dom"

function Home() {
  return (
    <div className="wrapper">
      <div className="home">
      <h1>8-1-Backend-Challange</h1>
      <p>
        A suite of backends created for the sole purpose of testing the
        performance, user-experience and development of creating backends in
        different programming languages.
      </p>
      <section>
      <Link to="/tests"> <button>View The Tests</button></Link>
      <Link to="/writeup"><button>View The Write Up</button></Link>
      </section>
      </div>
    </div>
  );
} 

export default Home;
