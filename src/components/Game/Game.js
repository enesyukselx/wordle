import React, { useState } from "react";
import useKeypress from "react-use-keypress";

import classes from "./Game.module.css";
import Tile from "./Tile";
import Modal from "../UI/Modal";
import Row from "./Row";

const Game = () => {
    const DUMMY_ANSWER = "fener";

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

    const [row1, setRow1] = useState(["", "", "", "", ""]);
    const [row2, setRow2] = useState(["", "", "", "", ""]);
    const [row3, setRow3] = useState(["", "", "", "", ""]);
    const [row4, setRow4] = useState(["", "", "", "", ""]);
    const [row5, setRow5] = useState(["", "", "", "", ""]);
    const [row6, setRow6] = useState(["", "", "", "", ""]);

    const rows = [row1, row2, row3, row4, row5, row6];
    const setRows = [setRow1, setRow2, setRow3, setRow4, setRow5, setRow6];

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

            if (rows[rowCount].join("") === DUMMY_ANSWER) {
                setTimeout(() => {
                    setShowModal(true);
                }, 500);
                setFinished(true);
                setIsWin(true);
            }
        }
    });

    useKeypress("Backspace", () => {
        if (tileCount !== 0 && !finished && rowCount !== 6) {
            setTileCount((prevState) => prevState - 1);
            setRows[rowCount]((prevState) => {
                const updatedArr = [...prevState];
                updatedArr[tileCount - 1] = "";
                return updatedArr;
            });
        }
    });

    useKeypress(availableLetters, (e) => {
        if (tileCount === 5) {
            return;
        }
        if (!finished) {
            setRows[rowCount]((prevRow1) => {
                const newRow1 = [...prevRow1];
                newRow1[tileCount] = e.key;
                return newRow1;
            });
            setTileCount((prevTileCount) => prevTileCount + 1);
        }
    });

    const wrong = (index, row) => {
        const answerLetter = DUMMY_ANSWER[index];
        const rowLetter = row[index];
        if (answerLetter.toUpperCase() !== rowLetter.toUpperCase()) {
            return true;
        }
    };

    const correct = (index, row) => {
        const answerLetter = DUMMY_ANSWER[index];
        const rowLetter = row[index];
        if (answerLetter.toUpperCase() === rowLetter.toUpperCase()) {
            return true;
        }
    };

    const present = (index, row) => {
        let present = false;

        if (correct(index, row)) {
            return present;
        }

        for (let letter of DUMMY_ANSWER) {
            if (letter.toUpperCase() === row[index].toUpperCase()) {
                present = true;
                return present;
            }
        }
    };

    const empty = (letter) => letter.trim() === "";

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
                            "The answer is " + DUMMY_ANSWER.toUpperCase()}
                        {isWin && (
                            <span>
                                You found the answer in
                                <strong> {rowCount}</strong> guess.
                            </span>
                        )}
                    </p>
                    <h3 className={classes.ModalTitle}>Your guesses</h3>
                    <ul className={classes.List}>
                        {rows.map((row, index) => (
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
                <Row
                    row={row1}
                    answer={DUMMY_ANSWER}
                    isEntered={isEntered[0]}
                />
                <Row
                    row={row2}
                    answer={DUMMY_ANSWER}
                    isEntered={isEntered[1]}
                />
                <Row
                    row={row3}
                    answer={DUMMY_ANSWER}
                    isEntered={isEntered[2]}
                />
                <Row
                    row={row4}
                    answer={DUMMY_ANSWER}
                    isEntered={isEntered[3]}
                />
                <Row
                    row={row5}
                    answer={DUMMY_ANSWER}
                    isEntered={isEntered[4]}
                />
                <Row
                    row={row6}
                    answer={DUMMY_ANSWER}
                    isEntered={isEntered[5]}
                />
            </div>
        </React.Fragment>
    );
};

export default Game;
