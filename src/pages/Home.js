import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = "Home | Matt Chandran Portfolio";
  }, []);
  return (
  <h1>Home Page</h1>
);
}

export default Home;
