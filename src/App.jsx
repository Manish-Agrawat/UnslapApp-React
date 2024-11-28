import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./navbar/Navbar";
import Card from "./Card/Card";

function App() {
  let [Images, setImages] = useState([]);
  useEffect(() => {
    async function dataFetch(url) {
      try {
        const res = await fetch(url);
        const resjson = await res.json();

        setImages([...resjson]);
      } catch (error) {
        console.log(error);
      }
    }

    dataFetch(
      "https://api.unsplash.com/photos/?client_id=qMjwsRR8FgpjKblC3QJtXe9aMyZXnWImYVWmvRBa3mU"
    );
  }, []);

  return (
    <>
      <Navbar />
      <Card Images={Images} />
    </>
  );
}

export default App;
