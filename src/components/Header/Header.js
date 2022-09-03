import classes from "./Header.module.css";

const Header = () => {
    return (
        <header className={classes.Header}>
            <div className={classes.Title}>Wordle Clone</div>
        </header>
    );
};

export default Header;
