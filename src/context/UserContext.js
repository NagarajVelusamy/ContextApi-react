import { createContext, useState } from "react";

export const UserContext = createContext();

export const UseContextrProvider = ({ children }) => {
    const [name, setName] = useState("John");
    const [age, setAge] = useState(22);

    const data = {
        name,
        setName,
        age,
        setAge
    }

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    );
};