import { Suspense, useState } from "react";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Technologies from "./components/Technologies";
import type { ITechnology } from "./types/technology";
import Footer from "./components/Footer";

const technologiesFetch = async (): Promise<ITechnology[]> => {
  const response = await fetch("/data.json");

  if (!response.ok) {
    throw new Error("Failed to load technology data");
  }

  const data: ITechnology[] = await response.json();

  return data;
};

function App() {
  const [technologiesPromise] = useState(() => technologiesFetch());

  return (
    <>
      <Nav />

      <Banner />

      <Suspense fallback={<h2>Loading.......</h2>}>
        <Technologies technologiesPromise={technologiesPromise} />
      </Suspense>

      <Footer></Footer>
    </>
  );
}

export default App;