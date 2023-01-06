import React, { useState } from "react";
import "./FonctionIncrementation.css";

function Example() {
    // Déclare une nouvelle variable d'état, que l'on va appeler « quantity »
    const [quantity, setQuantity] = useState(1); // Nous partons du principe que quand un article est sélectionné, la base sera donc d'un article.

    if (Number(quantity) > 1) {
        // essai de logique pour imposer un nombre > 0 ...

        return (
            <div>
                <button
                    type="button"
                    className="btn btn-Ajouter btn-sm"
                    onClick={() => setQuantity(quantity - 1)}
                >
                    -
                </button>
                {quantity} Ingredient
                <button
                    type="button"
                    className="btn btn-Enlever btn-sm"
                    onClick={() => setQuantity(quantity + 1)}
                >
                    +
                </button>
            </div>
        );
    } else {
        return (
            <div>
                <button
                    type="button"
                    className="btn btn-Ajouter btn-sm"
                    onClick={() => setQuantity(quantity - 0)}
                >
                    -
                </button>
                {quantity} Ingredient
                <button
                    type="button"
                    className="btn btn-Enlever btn-sm"
                    onClick={() => setQuantity(quantity + 1)}
                >
                    {/* A l'appui du bouton, on ne retire plus rien (voir quantity - 0) !!! */}
                    +
                </button>
            </div>
        );
    }
}

export default Example;