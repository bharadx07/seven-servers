import React, { useState } from "react";
import TestItem from "./TestItem";

function Tests() {
  const [display, setDisplay] = useState("3");
  const [finishedRequests, setFinishedRequests] = useState([""])


  if (display === "3") {
    setTimeout(() => setDisplay("2"), 1000);
    return (
      <div className="wrapper">
        <h1 style={{ color: "white", fontSize: "3rem" }}>3</h1>
      </div>
    );
  }

  if (display === "2") {
    setTimeout(() => setDisplay("1"), 1000);
    return (
      <div className="wrapper">
        <h1 style={{ color: "white", fontSize: "3rem" }}>2</h1>
      </div>
    );
  }

  if (display === "1") {
    setTimeout(() => setDisplay("nm"), 1000);
    return (
      <div className="wrapper">
        <h1 style={{ color: "white", fontSize: "3rem" }}>1</h1>
      </div>
    );
  }

  const languagesTests = [
    {name: "C#", lines: 39, ranking: 3},
    {name:"Go", lines: 32, ranking: 3},
    {name:"Java", lines: 63, ranking: 2},
    {name:"Javascript", lines: 22, ranking: 5},
    {name:"Python", lines: 18, ranking: 4},
    {name:"Ruby", lines: 20, ranking: 5},
    {name:"PHP", lines: 15, ranking: 3}
  ];

  return (
      <div className="tests">
        {languagesTests.map((lang, ind) => (
          <TestItem lang={lang} key={ind} reqs={finishedRequests} setReqs={setFinishedRequests} />
        ))}
      </div>
  );
}

export default Tests;
