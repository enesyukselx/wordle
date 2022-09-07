import { useContext } from "react";

import Context from "../../store/context";
import classes from "./Keyboard.module.css";

import Row from "./Row";
import Key from "./Key";

const Keyboard = () => {
    const ctx = useContext(Context);

    const row1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
    const row2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
    const row3 = ["z", "x", "c", "v", "b", "n", "m"];

    const keyClickHandler = (letter) => {
        if (letter === "Enter") {
            enterHandler();
        }
        if (letter === "Delete") {
            deleteHandler();
        }

        if (letter !== "Enter" && letter !== "Delete") {
            ctx.keyFunc(letter);
        }
    };

    const enterHandler = () => {
        ctx.enterFunc();
    };

    const deleteHandler = () => {
        ctx.backspaceFunc("Backspace");
    };

    return (
        <div className={classes.Keyboard}>
            <Row row={row1} keyClickHandler={keyClickHandler} />
            <Row row={row2} keyClickHandler={keyClickHandler} />
            <Row row={row3} keyClickHandler={keyClickHandler} enter delete />
        </div>
    );
};

export default Keyboard;
