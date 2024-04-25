import {useState} from "react";
import Board from "./Board";

function TicTacToe() {

    const PLAYER_X = "X";
    const PLAYER_O = "O";

    const [tiles, setTiles] = useState(Array(9).fill(null));
    const [player, setPlayer] = useState(PLAYER_O);

    const handleTileClick = (index) => {
        if (tiles[index] !== null) {
            return;
        }

        const newTiles = [...tiles];
        newTiles[index] = player;
        setTiles(newTiles);
        if (player === PLAYER_X) {
            setPlayer(PLAYER_O);
        } else {
            setPlayer(PLAYER_X);
        }
    }

    return (
        <div>
            <h1>Tic Tac Toe</h1>
            <Board player={player} tiles={tiles} onTileClick={handleTileClick}/>
        </div>
    );
}

export default TicTacToe;