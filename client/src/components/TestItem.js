import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import axios from "axios"
import { NODE_SERVER_URL, PYTHON_SERVER_URL } from "../constants/APIURLS";

function TestItem({ name }) {
  const [display, setDisplay] = useState("loading");
  const [getReqStatic, setGetReqStatic] = useState(null)
  const [postReqStatic, setPostReqStatic] = useState(null)

  useEffect(() => {
    setTimeout(() => setDisplay("tests"), Math.random()*5000);
    const getData = async () => {
      // const {data: getData} = await axios.get(NODE_SERVER_URL)
      // const {data: postData} = await axios.post(NODE_SERVER_URL, {
      //   name: "Bharadwaj Duggaraju"
      // }, {
      //   headers: {
      //     "Content-Type": "application/json",
      //   }
      // })

      // console.log("Node", getData)
      // console.log("Node", postData)

      const {data: getData} = await axios.get(PYTHON_SERVER_URL)
      const {data: postData} = await axios.post(PYTHON_SERVER_URL, {
        name: "Bharadwaj Duggaraju"
      }, {
        headers: {
          "Content-Type": "application/json",
        }
      })

      console.log("Python", getData)
      console.log("Python", postData)

    }

    getData()
  }, []);

  return (
    <div className="card">
      <h1>{name}</h1>
      <div>
        <div>Lines Of Code: 1000</div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          Developer Rating: <i className="far fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
        </div>
      </div>
      <section>
        <h1>Tests</h1>
        {display === "loading" && (
          <>
            <h3 style={{marginTop: ".5rem"}}>Running Tests...</h3>
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
            <h3 style={{margin: "1rem 0"}}>Test 1: Simple Get Request</h3>
            <div>
              Response: 'Hello Unknown Get Requester. Success from the {name}{" "}
              Server'
            </div>
            <h3  style={{margin: "1rem 0"}}>Test 2: Simple Post Request</h3>
            <div>
              Response: 'Hello Bharadwaj. Your are a Post Requester. Success
              from the {name} Server'
            </div>
            <h3 style={{marginTop: "1rem"}}>Time Taken: {performance.now()}</h3>
            <h3 style={{marginTop: "1rem", color: "green"}}>Finished 1st.</h3>
          </>
        )}
      </section>
    </div>
  );
}

export default TestItem;
