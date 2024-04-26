import {useState, useEffect} from "react";
import Board from "./Board";
import Result from "./Result";
import State from "./GameState";

const PLAYER_X = "X";
const PLAYER_O = "O";

const WINNING_COMBINATIONS = [
    // Rows
    {combo: [0, 1, 2], class: "strike-row-1"},
    {combo: [3, 4, 5], class: "strike-row-2"},
    {combo: [6, 7, 8], class: "strike-row-3"},
    // Columns
    {combo: [0, 3, 6], class: "strike-column-1"},
    {combo: [1, 4, 7], class: "strike-column-2"},
    {combo: [2, 5, 8], class: "strike-column-3"},
    // Diagonals
    {combo: [0, 4, 8], class: "strike-diagonal-1"},
    {combo: [2, 4, 6], class: "strike-diagonal-2"},
];

function checkWinner(tiles, setStrikeClass) {
    for (const {combo, class: strikeClass} of WINNING_COMBINATIONS) {
        const [a, b, c] = combo;
        if (tiles[a] && tiles[a] === tiles[b] && tiles[a] === tiles[c]) {
            setStrikeClass(strikeClass);
        }
    }
}

function TicTacToe() {

    const [tiles, setTiles] = useState(Array(9).fill(null));
    const [player, setPlayer] = useState(PLAYER_O);
    const [strikeClass, setStrikeClass] = useState("");
    const [gameState, setGameState] = useState(State.xWin);

    useEffect(() => {
        checkWinner(tiles, setStrikeClass);
    }, [tiles]);

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
            <Result gameState={gameState} />
        </div>
    );
}

export default TicTacToe;