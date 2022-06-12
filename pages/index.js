import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout/Layout";
import Header from "../components/layout/Header";
import Heading from "../components/Heading";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import Paragraph from "../components/Paragraph";
import SpoilrImg from "../public/images/screenshot_spoilralert.png";
import WitchImg from "../public/images/screenshot_witchescaultron.png";
import PeezyImg from "../public/images/screenshot_peezy.png";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <Layout>
      <div className="wrapper">
        <Header />
        <main>
          <div className="card">
            <div>
              <Image
                src={SpoilrImg}
                width="400"
                height="200"
                alt="screenshot spoilralert"
              />
              <Title title="Spoilralert" />
              <section>
                <SubTitle title="Made with:" />
                <Paragraph text="Next js, Sass" />
              </section>
              <section>
                <SubTitle title="Description:" />
                <Paragraph
                  text="A movie db site with user added spoilers. 
                  Users can search for a specific title and choose from a dropdown of suggested titles. 
                  If title doesn't exist in spoilralert db, they can search from full movie db and add request or spoilr (if logged in). 
                  Spoilers are by default hidden so the site can also be used just as a regular movie db. 
                  I built this as my project exam for my studies in front-end development."
                />
              </section>
            </div>

            <a href="https://github.com/spoilralert/spoilralert">
              [Link to github]
            </a>
          </div>

          <div className="card">
            <div>
              <Image
                src={WitchImg}
                width="400"
                height="200"
                alt="screenshot witches cauldron"
              />
              <Title title="Witches Cauldron" />
              <section>
                <SubTitle title="Made with:" />
                <Paragraph text="Next js, Sass" />
              </section>
              <section>
                <SubTitle title="Description:" />
                <Paragraph
                  text="A cocktail drink site. Users can choose cocktails from a list and get detailed information on ingredients and instructions. 
                  I built this as my course assignment for Javascript frameworks, in my studies in front-end development."
                />
              </section>
            </div>

            <a href="https://github.com/Linda-404/witches-cauldron">
              [Link to github]
            </a>
          </div>
          <div className="card">
            <div>
              <Image
                src={PeezyImg}
                width="400"
                height="200"
                alt="screenshot peezy"
              />
              <Title title="Peezy" />
              <section>
                <SubTitle title="Made with:" />
                <Paragraph text="Next js, Sass" />
              </section>
              <section>
                <SubTitle title="Description:" />
                <Paragraph
                  text="An online Shoe Store for urban and sport sneakers. 
                I built this as my first semester project year 2 for my studies in front-end development. 
                Goal for this project was to create an e-commerce website that has both customer-facing and admin sections. 
                Both sections should be responsive and the website will be populated by a Strapi API supplied by Noroff."
                />
              </section>
            </div>

            <a href="https://github.com/Linda-404/peezy">[Link to github]</a>
          </div>
        </main>
      </div>

      <Footer />
    </Layout>
  );
}
