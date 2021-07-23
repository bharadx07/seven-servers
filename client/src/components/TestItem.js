import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import makeRequestFromLanguage from "../constants/request";

function TestItem({ lang, reqs, setReqs }) {
  const [display, setDisplay] = useState("loading");
  const [getReqStatic, setGetReqStatic] = useState("");
  const [postReqStatic, setPostReqStatic] = useState("");
  const [timeTaken, setTimeTaken] = useState(0);
  const [localLength, setLocalLength] = useState(0)

  useEffect(() => {
    const getData = async () => {
      const {get, post} = await makeRequestFromLanguage(lang.name)
      setGetReqStatic(get);
      setPostReqStatic(post)
    };

    const startTime = performance.now()

    getData().then(() => { 
      const tempReqs = reqs
      tempReqs.push("");
      setReqs(tempReqs)
      setLocalLength(reqs.length-1)
      setTimeTaken(performance.now()-startTime)
      setDisplay("tests")

    });
    // eslint-disable-next-line 
  }, [setReqs, setTimeTaken]);

  const fillArray = new Array(lang.ranking).fill(0);
  const nonFillArray = new Array(5-lang.ranking).fill(0)

  return (
    <div className="card">
      <h1>{lang.name}</h1>
      <div>
        <div>Lines Of Code: {lang.lines}</div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          Dev Rating: <br />
          {fillArray.map((_, i) => <i key={i} className="fas fa-star" style={{margin: "0 .1rem"}}></i>)}
          {nonFillArray.map((_, i) => <i key={i} className="far fa-star" style={{margin: "0 .1rem"}}></i>)}  
        </div>
      </div>
      <section>
        <h1>Tests</h1>
        {display === "loading" && (
          <>
            <h3 style={{ marginTop: ".5rem" }}>Running Tests...</h3>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Loader
                type="TailSpin"
                color="lightcoral"
                height={50}
                width={50}
              />
            </div>
          </>
        )}
        {display === "tests" && (
          <>
            <h3 style={{ margin: "1rem 0" }}>Test 1: Simple Get Request</h3>
            <div>
              {getReqStatic}
            </div>
            <h3 style={{ margin: "1rem 0" }}>Test 2: Simple Post Request</h3>
            <div>
              {postReqStatic}
            </div>
            <h3 style={{ marginTop: "1rem" }}>Time Taken: {timeTaken}</h3>
            <h3 style={{ marginTop: "1rem", color: "green" }}>
              Finished {localLength}{localLength === 1 && "st"}{localLength === 2 && "nd"}{localLength === 3 && "rd"}{localLength > 3 && "th"}.
            </h3>
          </>
        )}
      </section>
    </div>
  );
}

export default TestItem;
