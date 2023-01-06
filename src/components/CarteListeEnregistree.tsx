import React from 'react';
import "./CarteListeEnregistree.css";

const date = "00/00/0000";
const comments = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut sollicitudin dignissim tellus interdum facilisis.Maecenas ac enim quis leo placerat ullamcorper.Mauris at sem fermentum, ullamcorper arcu non, lacinia elit.Vivamus venenatis sed est ac mauris.";
const favories = <button>favorie</button>
const CarteListeEnregistree = () => {

    // const comment: string = "abcdefghijklmnopqrstuvwxyz";
    return (
        <div className="container">
            <h1>Listes enregistrées</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Commentaires</th>
                        <th>Favorie</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{date}</td>
                        <td>{comments}</td>
                        <td>{favories}</td>
                    </tr>
                    <tr>
                        <td>{date}</td>
                        <td>{comments}</td>
                        <td>{favories}</td>
                    </tr>
                    <tr>
                        <td>{date}</td>
                        <td>{comments}</td>
                        <td>{favories}</td>
                    </tr>
                    <tr>
                        <td>{date}</td>
                        <td>{comments}</td>
                        <td>{favories}</td>
                    </tr>
                    <tr>
                        <td>{date}</td>
                        <td>{comments}</td>
                        <td>{favories}</td>
                    </tr>
                    <tr>
                        <td>{date}</td>
                        <td>{comments}</td>
                        <td>{favories}</td>
                    </tr>
                    <tr>
                        <td>{date}</td>
                        <td>{comments}</td>
                        <td>{favories}</td>
                    </tr>
                    <tr>
                        <td>{date}</td>
                        <td>{comments}</td>
                        <td>{favories}</td>
                    </tr>
                    <tr>
                        <td>{date}</td>
                        <td>{comments}</td>
                        <td>{favories}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
export default CarteListeEnregistree;

// "abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwx abcdefghijklmnopqrstuvwx abcdefghijklmnopqrstuvwx abcdefghijklmnopqrstuvwx abcdefghijklmnopqrstuvwx"