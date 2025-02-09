import { createContext,useState } from "react";

export const AttemptContext = createContext({});

export function AttemptContextProvider (props){
    const [AttemptMap,setAttemptMap] = useState(null);

    return(
        <AttemptContext.Provider value={{AttemptMap,setAttemptMap}}>
            {props.children}
        </AttemptContext.Provider>
    );   
}