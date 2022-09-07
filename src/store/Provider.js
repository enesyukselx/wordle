import { useState } from "react";
import Context from "./context";

const Provider = (props) => {
    const WORDLE_ANSWER = "table";

    const [row1, setRow1] = useState(["", "", "", "", ""]);
    const [row2, setRow2] = useState(["", "", "", "", ""]);
    const [row3, setRow3] = useState(["", "", "", "", ""]);
    const [row4, setRow4] = useState(["", "", "", "", ""]);
    const [row5, setRow5] = useState(["", "", "", "", ""]);
    const [row6, setRow6] = useState(["", "", "", "", ""]);

    const rows = [row1, row2, row3, row4, row5, row6];
    const setRows = [setRow1, setRow2, setRow3, setRow4, setRow5, setRow6];

    const [showModal, setShowModal] = useState(false);
    const [rowCount, setRowCount] = useState(0);
    const [tileCount, setTileCount] = useState(0);
    const [finished, setFinished] = useState(false);
    const [isEntered, setIsEntered] = useState([
        false,
        false,
        false,
        false,
        false,
        false,
    ]);
    const [isWin, setIsWin] = useState(false);

    const setRow = (row, tile, key, del = false) => {
        if (del) {
            setRows[row]((prevState) => {
                const updatedArr = [...prevState];
                updatedArr[tile - 1] = "";
                return updatedArr;
            });
        } else {
            setRows[row]((prevState) => {
                const updatedArr = [...prevState];
                updatedArr[tile] = key;
                return updatedArr;
            });
        }
    };

    const enterFunc = () => {
        if (tileCount === 5 && rowCount !== 6 && !finished) {
            setRowCount(rowCount + 1);
            setIsEntered((prevState) => {
                const updatedArr = [...prevState];
                updatedArr[rowCount] = true;
                return updatedArr;
            });
            setTileCount(0);
            if (rowCount === 5) {
                setTileCount(5);
                setTimeout(() => {
                    setShowModal(true);
                }, 500);
                setFinished(true);
            }

            if (
                rows[rowCount].join("") === WORDLE_ANSWER ||
                rows[rowCount].join("") === WORDLE_ANSWER.toUpperCase()
            ) {
                setFinished(true);
                setTimeout(() => {
                    setShowModal(true);
                }, 500);
                setIsWin(true);
            }
        }
    };

    const backspaceFunc = (e) => {
        if (tileCount !== 0 && !finished && rowCount !== 6) {
            setTileCount((prevState) => prevState - 1);
            setRow(rowCount, tileCount, e, true);
        }
    };

    const keyFunc = (e) => {
        if (tileCount === 5) {
            return;
        }
        if (!finished) {
            setRow(rowCount, tileCount, e);
            setTileCount((prevTileCount) => prevTileCount + 1);
        }
    };

    const value = {
        WORDLE_ANSWER,
        rows,
        rowCount,
        isEntered,
        isWin,
        showModal,
        setShowModal,
        keyFunc,
        enterFunc,
        backspaceFunc,
    };

    return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export default Provider;
