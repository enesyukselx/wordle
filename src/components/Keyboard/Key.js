import classes from "./Key.module.css";

const Key = (props) => {
    let buttonClasses = classes.Key;
    if (props.correct) {
        buttonClasses = classes.Key + " " + classes.Correct;
    }
    if (props.wrong) {
        buttonClasses = classes.Key + " " + classes.Wrong;
    }
    if (props.present) {
        buttonClasses = classes.Key + " " + classes.Present;
    }

    const keyHandle = () => {
        props.clickHandler(props.letter);
    };

    return (
        <button onClick={keyHandle} className={buttonClasses}>
            {props.letter}
        </button>
    );
};

export default Key;
