import React from "react";

const Context = React.createContext({
    WORDLE_ANSWER: "",
    rows: [],
    rowCount: 0,
    isEntered: [],
    isWin: false,
    keyFunc: () => {},
    enterFunc: () => {},
    backspaceFunc: () => {},
});

export default Context;
