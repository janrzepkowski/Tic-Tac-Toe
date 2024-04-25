import {useState} from "react";
import Board from "./Board";

const PLAYER_X = "X";
const PLAYER_O = "O";


function TicTacToe() {

    const [tiles, setTiles] = useState(Array(9).fill(null));
    const [player, setPlayer] = useState(PLAYER_O);
    const [strikeClass, setStrikeClass] = useState("strike-row-1");

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
            <Board
                player={player}
                tiles={tiles}
                onTileClick={handleTileClick}
                strikeClass={strikeClass}
            />
        </div>
    );
}

export default TicTacToe;