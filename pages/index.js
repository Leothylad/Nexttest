import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";

function Home() {
  return (
    <div>
      <Navbar />
      <h1>This is leo website</h1>
      <Hero
        heading="Hello I am leo"
        subHeading="Leo likes to play minecraft"
        buttonText="Click"
        bgImage="/bgGif.gif"
      />
    </div>
  );
}

export default Home;
