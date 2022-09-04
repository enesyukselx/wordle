import React, { useState, useContext } from "react";
import useKeypress from "react-use-keypress";
import Context from "../../store/context";

import classes from "./Game.module.css";
import Modal from "../UI/Modal";
import Row from "./Row";

const Game = () => {
    const ctx = useContext(Context);

    const [showModal, setShowModal] = useState(false);
    const [finished, setFinished] = useState(false);
    const [isWin, setIsWin] = useState(false);

    const availableLetters = [
        "e",
        "r",
        "t",
        "y",
        "u",
        "ı",
        "o",
        "p",
        "ğ",
        "ü",
        "a",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "ş",
        "i",
        "z",
        "c",
        "v",
        "b",
        "n",
        "m",
        "ö",
        "ç",
    ];

    const [isEntered, setIsEntered] = useState([
        false,
        false,
        false,
        false,
        false,
        false,
    ]);
    const [tileCount, setTileCount] = useState(0);
    const [rowCount, setRowCount] = useState(0);

    useKeypress("Enter", () => {
        if (tileCount === 5 && rowCount !== 6 && !finished) {
            setRowCount(rowCount + 1);
            setIsEntered((prevState) => {
                const updatedArr = [...prevState];
                updatedArr[rowCount] = true;
                return updatedArr;
            });
            setTileCount(0);
            if (rowCount === 5) {
                setTileCount(5);
                setTimeout(() => {
                    setShowModal(true);
                }, 500);
                setFinished(true);
            }

            if (ctx.rows[rowCount].join("") === ctx.WORDLE_ANSWER) {
                setTimeout(() => {
                    setShowModal(true);
                }, 500);
                setFinished(true);
                setIsWin(true);
            }
        }
    });

    useKeypress("Backspace", (e) => {
        if (tileCount !== 0 && !finished && rowCount !== 6) {
            setTileCount((prevState) => prevState - 1);
            ctx.setRow(rowCount, tileCount, e.key, true);
        }
    });

    useKeypress(availableLetters, (e) => {
        if (tileCount === 5) {
            return;
        }
        if (!finished) {
            ctx.setRow(rowCount, tileCount, e.key);
            setTileCount((prevTileCount) => prevTileCount + 1);
        }
    });

    const closeModalHandler = () => {
        setShowModal(false);
    };

    return (
        <React.Fragment>
            {showModal && (
                <Modal onClose={closeModalHandler}>
                    <h1>{isWin ? "Congrulations!!!!" : "Try Again :("}</h1>
                    <p className={classes.ModalParagraph}>
                        {!isWin &&
                            "The answer is " + ctx.WORDLE_ANSWER.toUpperCase()}
                        {isWin && (
                            <span>
                                You found the answer in
                                <strong> {rowCount}</strong> guess.
                            </span>
                        )}
                    </p>
                    <h3 className={classes.ModalTitle}>Your guesses</h3>
                    <ul className={classes.List}>
                        {ctx.rows.map((row, index) => (
                            <li key={index}>{row.join("").toUpperCase()}</li>
                        ))}
                    </ul>
                    <div className={classes.Actions}>
                        <button
                            className={classes.Button}
                            onClick={closeModalHandler}
                        >
                            Close
                        </button>
                    </div>
                </Modal>
            )}
            <div className={classes.Game}>
                {ctx.rows.map((row, index) => (
                    <Row
                        key={index}
                        row={row}
                        index={index}
                        isEntered={isEntered[index]}
                    />
                ))}
            </div>
        </React.Fragment>
    );
};

export default Game;
