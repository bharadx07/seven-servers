import React, { useState } from "react";
import TestItem from "./TestItem";

function Tests() {
  const [display, setDisplay] = useState("3");
  const [finishedRequests, setFinishedRequests] = useState([])


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
    "C#",
    "Go",
    "Java",
    "Javascript",
    "Kotlin",
    "Python",
    "Ruby",
  ];

  return (
      <div className="tests">
        {languagesTests.map((lang) => (
          <TestItem name={lang} key={languagesTests.indexOf(lang)} finishedRequests={finishedRequests} setFinishedRequests={setFinishedRequests} />
        ))}
      </div>
  );
}

export default Tests;
