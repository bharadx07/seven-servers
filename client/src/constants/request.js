import axios from "axios";
import {
  CSHARP_SERVER_URL,
  GO_SERVER_URL,
  JAVA_SERVER_URL,
  NODE_SERVER_URL,
  PHP_SERVER_URL,
  PYTHON_SERVER_URL,
  RUBY_SERVER_URL,
} from "../constants/APIURLS";

export default async function makeRequestFromLanguage(language) {
  const response = {
    get: null,
    post: null,
  };

  switch (language) {
    case "C#":
      const { data: getDataC } = await axios.get(CSHARP_SERVER_URL);
      const { data: postDataC } = await axios.post(
        CSHARP_SERVER_URL,
        {
          data: "Bharadwaj Duggaraju",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      response.get = getDataC.data;
      response.post = postDataC.data;

      break;
    case "Go":
      const { data: getDataG } = await axios.get(GO_SERVER_URL);
      const { data: postDataG } = await axios.post(
        GO_SERVER_URL,
        {
          name: "Bharadwaj Duggaraju",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      response.get = getDataG;
      response.post = postDataG;

      break;

    case "Java":
      const { data: getDataJ } = await axios.get(JAVA_SERVER_URL);
      const { data: postDataJ } = await axios.post(
        JAVA_SERVER_URL,
        "Bharadwaj Duggaraju",
        {
          headers: {
            "Content-Type": "text/plain",
          },
        }
      );

      response.get = getDataJ;
      response.post = postDataJ;

      break;
    case "Javascript":
      const { data: getDataJV } = await axios.get(NODE_SERVER_URL);
      const { data: postDataJV } = await axios.post(
        NODE_SERVER_URL,
        {
          name: "Bharadwaj Duggaraju",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      response.get = getDataJV;
      response.post = postDataJV;

      break;
    case "Python":
      const { data: getDataP } = await axios.get(PYTHON_SERVER_URL);
      const { data: postDataP } = await axios.post(
        PYTHON_SERVER_URL,
        {
          name: "Bharadwaj Duggaraju",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      response.get = getDataP;
      response.post = postDataP;

      break;
    case "Ruby":
      const { data: getDataR } = await axios.get(RUBY_SERVER_URL);
      const req = await fetch("http://localhost:6060", {method: "POST", body: JSON.stringify({name: "Bharadwaj Duggaraju"})})
      const res = await req.text();

      response.get = getDataR;
      response.post = res;

      break;
    case "PHP":
      const { data: getDataPH } = await axios.get(PHP_SERVER_URL);
      const { data: postDataPH } = await axios.post(
        PHP_SERVER_URL,
        {
          name: "Bharadwaj Duggaraju",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      response.get = getDataPH;
      response.post = postDataPH;

      break;
    default:
      break;
  }

  return response;
}
