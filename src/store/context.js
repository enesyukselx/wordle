import React from "react";

const Context = React.createContext({
    WORDLE_ANSWER: "",
    rows: [],
    setRow: () => {},
});

export default Context;
