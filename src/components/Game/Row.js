import classes from "./Row.module.css";
import Tile from "./Tile";

const Row = (props) => {
    const wrong = (index, row) => {
        const answerLetter = props.answer[index];
        const rowLetter = row[index];
        if (answerLetter.toUpperCase() !== rowLetter.toUpperCase()) {
            return true;
        }
    };

    const correct = (index, row) => {
        const answerLetter = props.answer[index];
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

        for (let letter of props.answer) {
            if (letter.toUpperCase() === row[index].toUpperCase()) {
                present = true;
                return present;
            }
        }
    };

    const empty = (letter) => letter.trim() === "";

    return (
        <div className={classes.Row}>
            {props.row.map((letter, index) => (
                <Tile
                    key={index}
                    letter={letter}
                    {...(!empty(letter) &&
                        props.isEntered &&
                        wrong(index, props.row) && { wrong: true })}
                    {...(props.isEntered &&
                        present(index, props.row) && { present: true })}
                    {...(props.isEntered &&
                        correct(index, props.row) && { correct: true })}
                />
            ))}
        </div>
    );
};

export default Row;
