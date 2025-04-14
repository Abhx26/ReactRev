import React, { createContext, useState } from "react";

const ItemContext = createContext(null);

export const ItemProvider = (props) => {
    const [item, setItem] = useState([]);

    return (
        <ItemContext.Provider value={{ item, setItem }}>
            {props.children}
        </ItemContext.Provider>
    );
};

export default ItemContext;
