import BoutonDemarrer from "../components/BoutonDemarrer";
import "./PageHome.css";
import Carousel2 from "../components/Carousel2";

const Home = () => {
  return (
    <div>
      <Carousel2 />
      <div className='Footer'>
        <img
          src="/Logos/PhraseList.png"
          className="d-block w-100"
          alt="Laissez nous vous rendre la vie plus facile"
        />
        <BoutonDemarrer />
      </div>
    </div>
  );
};

export default Home;
