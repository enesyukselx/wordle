import { useState } from "react";
import Context from "./context";

const Provider = (props) => {
    const WORDLE_ANSWER = "bahçe";

    const [row1, setRow1] = useState(["", "", "", "", ""]);
    const [row2, setRow2] = useState(["", "", "", "", ""]);
    const [row3, setRow3] = useState(["", "", "", "", ""]);
    const [row4, setRow4] = useState(["", "", "", "", ""]);
    const [row5, setRow5] = useState(["", "", "", "", ""]);
    const [row6, setRow6] = useState(["", "", "", "", ""]);

    const rows = [row1, row2, row3, row4, row5, row6];
    const setRows = [setRow1, setRow2, setRow3, setRow4, setRow5, setRow6];

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

    const value = {
        WORDLE_ANSWER,
        rows,
        setRow,
    };

    return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export default Provider;
