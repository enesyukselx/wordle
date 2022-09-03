import classes from "./Tile.module.css";

const Tile = (props) => {
    let tileClasses = classes.Tile;

    if (props.correct) {
        tileClasses = classes.Tile + " " + classes.Correct;
    }
    if (props.wrong) {
        tileClasses = classes.Tile + " " + classes.Wrong;
    }
    if (props.present) {
        tileClasses = classes.Tile + " " + classes.Present;
    }

    return <div className={tileClasses}>{props.letter}</div>;
};

export default Tile;
