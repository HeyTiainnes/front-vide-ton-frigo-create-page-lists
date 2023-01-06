import './CarteIngredients.css';        // importation du css adaptée à la page

const CarteIngredients = () => {
  return (
        <div className='card text-center mb-3 shadow'>
          <div className='card-body'>
            <h5 className='card-title'>Ingrédients</h5>
            <p className='card-text'>
              Catégorie
            </p>
            <a href='#' className='btn btn-carte'>
              Ajouter
            </a>
          </div>
        </div>
  );
};

export default CarteIngredients;
