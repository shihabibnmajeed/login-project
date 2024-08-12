import { createContext, useState } from "react";

 const  Authcontext=createContext();
 
 export const Authprovider =({ children}) =>{
    const [Bill, setBill] = useState([]);
    return (
        <Authcontext.Provider value={{Bill, setBill}}>
        {children}
        
        </Authcontext.Provider>
    );

 };

 export default Authcontext;