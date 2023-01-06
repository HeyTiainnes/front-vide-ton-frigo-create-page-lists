import Liste from "../components/Liste";
import Magasin from "../components/Magasin";
import "./PageDoList.css";
import Searchbar from "../components/searchbar";
import BoutonEnregistrer from "../components/BoutonEnregistrer";
import BoutonAccesListes from "../components/BoutonAccesListes";

const DoList = () => {
  return (
    <div>

      <Searchbar />
      <div className="d-flex justify-content-center">
        <div className="SurfaceDeControle">
          <div className="Choix border-dark border border-3 rounded border-opacity-50">
            <Magasin />
          </div>
          <div className="TicketDeCaisse border-dark border border-3 rounded border-opacity-50">
            <Liste />
          </div>
        </div>
      </div>
      <div className="BoutonFooter d-flex justify-content-around">
        <BoutonAccesListes />
        <BoutonEnregistrer />
      </div>
    </div>
  );
};
//
export default DoList;
