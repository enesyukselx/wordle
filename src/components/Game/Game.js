import React, { useState, useContext } from "react";
import useKeypress from "react-use-keypress";
import Context from "../../store/context";

import classes from "./Game.module.css";
import Modal from "../UI/Modal";
import Row from "./Row";
import ModalContent from "./ModalContent";

const Game = () => {
    const ctx = useContext(Context);

    const [showModal, setShowModal] = useState(false);

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

    useKeypress("Enter", () => {
        ctx.enterFunc(() => {
            setTimeout(() => {
                setShowModal(true);
            }, 500);
        });
    });

    useKeypress("Backspace", (e) => {
        ctx.backspaceFunc(e.key);
    });

    useKeypress(availableLetters, (e) => {
        ctx.keyFunc(e.key);
    });

    const closeModalHandler = () => {
        setShowModal(false);
    };

    return (
        <React.Fragment>
            {showModal && (
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
