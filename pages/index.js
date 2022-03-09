import Card from "../components/card/Card";
import Hero from "../components/hero/Hero";
import Layout from "../components/layout/Layout";
import SectionBreak from "../components/sectionbreak/SectionBreak";
import ContactForm from "../components/contactForm/ContactForm";
function Home() {
  return (
    <Layout>
      <h1>This is leo website</h1>
      <Hero
        heading="Hello I am leo"
        subHeading="Leo likes to play minecraft"
        buttonText="Click"
        bgImage="/bgGif.gif"
      />
      <SectionBreak />
      <h2> Pogjects</h2>
      <div className="flex justify-space-evenly flew-wrap">
        <Card
          image="/project.jpeg"
          alt="hi"
          title="Leo"
          text="leo"
          buttonText="Click"
        />
        <Card
          image="/project.jpeg"
          alt="hi"
          title="Leo"
          text="leo"
          buttonText="Click"
        />
        <Card
          image="/project.jpeg"
          alt="hi"
          title="Leo"
          text="leo"
          buttonText="Click"
        />
      </div>
      <ContactForm />
    </Layout>
  );
}

export default Home;
