import { useState } from "react";
import Context from "./context";

const Provider = (props) => {
    const value = {};

    return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export default Provider;
