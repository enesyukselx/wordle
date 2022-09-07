import classes from "./Row.module.css";

import Key from "./Key";

const Row = (props) => {
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
                        correct={props.correct}
                        wrong={props.wrong}
                        present={props.present}
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
