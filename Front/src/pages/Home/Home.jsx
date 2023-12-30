import Contact from "../../components/Contact/Contact";
import HomeImg from "../../components/HomeImg/HomeImg";
import Navbar from "../../components/Navbar/Navbar";
import Cards from "../../components/Cards/Cards";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeImg />
      <Cards />
      <Contact />
    </div>
  );
}
