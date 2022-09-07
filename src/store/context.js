import React from "react";

const Context = React.createContext({
    wordList: [],
    WORDLE_ANSWER: "",
    rows: [],
    rowCount: 0,
    isEntered: [],
    isWin: false,
    showModal: true,
    setShowModal: () => {},
    keyFunc: () => {},
    enterFunc: () => {},
    backspaceFunc: () => {},
    randomWord: () => {},
});

export default Context;
