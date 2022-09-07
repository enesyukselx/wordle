import React, { useContext, useEffect } from "react";
import useKeypress from "react-use-keypress";
import Context from "../../store/context";

import classes from "./Game.module.css";
import Modal from "../UI/Modal";
import Row from "./Row";
import ModalContent from "./ModalContent";

const Game = () => {
    const ctx = useContext(Context);

    useEffect(() => {
        console.log(ctx.randomWord());
    }, []);

    const availableLetters = [
        "q",
        "w",
        "e",
        "r",
        "t",
        "y",
        "u",
        "i",
        "o",
        "p",
        "a",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "z",
        "x",
        "c",
        "v",
        "b",
        "n",
        "m",
    ];

    const upperCase = availableLetters.map((letter) => {
        return letter.toUpperCase();
    });

    const availables = [...availableLetters, ...upperCase];

    useKeypress("Enter", () => {
        ctx.enterFunc();
    });

    useKeypress("Backspace", (e) => {
        ctx.backspaceFunc(e.key);
    });

    useKeypress(availables, (e) => {
        ctx.keyFunc(e.key);
    });

    const closeModalHandler = () => {
        ctx.setShowModal(false);
    };

    return (
        <React.Fragment>
            {ctx.showModal && (
                <Modal onClose={closeModalHandler}>
                    <ModalContent
                        isWin={ctx.isWin}
                        rowCount={ctx.rowCount}
                        closeModal={closeModalHandler}
                    />
                </Modal>
            )}
            <div className={classes.Game}>
                {ctx.rows.map((row, index) => (
                    <Row
                        key={index}
                        row={row}
                        index={index}
                        isEntered={ctx.isEntered[index]}
                    />
                ))}
            </div>
        </React.Fragment>
    );
};

export default Game;
