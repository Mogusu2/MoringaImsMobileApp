import { createContext, useState } from "react";

const NavContext = createContext();

const NavProvider = ({ children }) => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <NavContext.Provider value={{ showMenu, setShowMenu }}>
            {children}
        </NavContext.Provider>     
    )
}
export {NavContext, NavProvider}