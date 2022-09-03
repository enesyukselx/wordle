import classes from "./Game.module.css";
import Tile from "./Tile";

const Game = () => {
    return (
        <div className={classes.Game}>
            <div className={classes.Row}>
                <Tile letter="K" wrong />
                <Tile letter="A" wrong />
                <Tile letter="L" present />
                <Tile letter="E" correct />
                <Tile letter="M" wrong />
            </div>
            <div className={classes.Row}>
                <Tile letter="S" />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
            </div>
            <div className={classes.Row}>
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
            </div>
            <div className={classes.Row}>
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
            </div>
            <div className={classes.Row}>
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
            </div>
            <div className={classes.Row}>
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
            </div>
        </div>
    );
};

export default Game;
