import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="wrapper">
      <div className="home">
        <h1>Seven Servers</h1>
        <p>
          A suite of backends created for the sole purpose of testing the
          performance, user-experience and development of creating backends in
          different programming languages.
        </p>
        <section>
          <Link to="/tests">
            {" "}
            <button>View The Tests</button>
          </Link>
          <a href="https://github.com/bharadwajduggaraju/seven-servers/blob/master/README.md" target="_blank" rel="noreferrer">
            <button>View The Write Up</button>
          </a>
        </section>
      </div>
    </div>
  );
}

export default Home;
