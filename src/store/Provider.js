import Context from "./context";

const Provider = (props) => {
    const value = {
        func: () => {},
    };

    return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export default Provider;
