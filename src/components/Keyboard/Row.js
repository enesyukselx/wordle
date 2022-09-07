import { useState, useContext, useEffect } from "react";

import Context from "../../store/context";
import classes from "./Row.module.css";

import Key from "./Key";

const Row = (props) => {
    const ctx = useContext(Context);

    const [correctLetters, setCorrectLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);
    const [presentLetters, setPresentLetters] = useState([]);

    const checkKeyStatus = () => {
        if (ctx.isEntered[ctx.rowCount - 1]) {
            ctx.WORDLE_ANSWER.split("").forEach((letter, index) => {
                if (
                    ctx.rows[ctx.rowCount - 1][index].toLowerCase() ===
                    letter.toLowerCase()
                ) {
                    setCorrectLetters((prevState) => {
                        const updatedArr = [...prevState];
                        updatedArr.push(letter);
                        return updatedArr;
                    });
                }

                if (
                    ctx.rows[ctx.rowCount - 1][index].toLowerCase() !==
                    letter.toLowerCase()
                ) {
                    setWrongLetters((prevState) => {
                        const updatedArr = [...prevState];
                        updatedArr.push(
                            ctx.rows[ctx.rowCount - 1][index].toLowerCase()
                        );
                        return updatedArr;
                    });
                }

                if (
                    ctx.rows[ctx.rowCount - 1].includes(
                        letter.toString().toUpperCase()
                    ) ||
                    ctx.rows[ctx.rowCount - 1].includes(
                        letter.toString().toLowerCase()
                    )
                ) {
                    setPresentLetters((prevState) => {
                        const updatedArr = [...prevState];
                        updatedArr.push(letter);
                        return updatedArr;
                    });
                }
            });
        }
    };

    useEffect(() => {
        checkKeyStatus();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ctx.isEntered]);

    return (
        <div className={classes.Row}>
            {props.enter ? (
                <Key
                    key="enter"
                    letter="Enter"
                    clickHandler={props.keyClickHandler}
                />
            ) : null}
            {props.row.map((letter) => {
                return (
                    <Key
                        key={letter}
                        letter={letter}
                        clickHandler={props.keyClickHandler}
                        correct={correctLetters.includes(letter)}
                        wrong={
                            !correctLetters.includes(letter) &&
                            !presentLetters.includes(letter) &&
                            wrongLetters.includes(letter)
                        }
                        present={
                            !correctLetters.includes(letter) &&
                            presentLetters.includes(letter)
                        }
                    />
                );
            })}
            {props.delete ? (
                <Key
                    key="delete"
                    letter="Delete"
                    clickHandler={props.keyClickHandler}
                />
            ) : null}
        </div>
    );
};

export default Row;
