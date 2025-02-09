import { createContext,useState } from "react";

export const QuestionContext = createContext(1);

export function QuestionContextProvider (props){
    const [QuestionNumber,setQuestionNumber] = useState(1);
    return(
        <QuestionContext.Provider value={{QuestionNumber,setQuestionNumber}}>
            {props.children}
        </QuestionContext.Provider>
    )
}
