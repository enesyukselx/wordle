import { useContext } from "react";

import Context from "../../store/context";
import classes from "./ModalContent.module.css";

const ModalContent = (props) => {
    const ctx = useContext(Context);

    return (
        <div className={classes.ModalContent}>
            <h1>{props.isWin ? "Congrulations!!!!" : "Try Again :("}</h1>
            <p className={classes.ModalParagraph}>
                {!props.isWin &&
                    "The answer is " + ctx.WORDLE_ANSWER.toUpperCase()}
                {props.isWin && (
                    <span>
                        You found the answer in
                        <strong> {props.rowCount}</strong> guess.
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
                <button className={classes.Button} onClick={props.closeModal}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default ModalContent;
