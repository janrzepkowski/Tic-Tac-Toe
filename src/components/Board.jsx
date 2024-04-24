import React from "react";
import "./Board.css";
import Box from "./Box";

const Board = () => {
    return (
        <>
            <div className="board">
                <Box />
                <Box />
                <Box />
            </div>
            <div className="board">
                <Box />
                <Box />
                <Box />
            </div>
            <div className="board">
                <Box />
                <Box />
                <Box />
            </div>
        </>
    );
}

export default Board;