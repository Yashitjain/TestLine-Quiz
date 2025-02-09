import React from "react";
import { useContext } from "react";
import { useEffect,useState } from "react";
import QuestionCard from "./QuestionCard";
import { QuestionContext } from "../ContextApi/QuestionContext";
import { AttemptContext } from "../ContextApi/Attempt";

function Home(){
    const [QuestionSet,setQuestion] = useState([]);
    const Question = useContext(QuestionContext);
    const Attempt = useContext(AttemptContext);

    useEffect(()=>{
        async function getQuizData() {
            const data = await fetch("http://localhost:8000/");
            const response = await data.json();
            setQuestion(response.questions);
            const map = new Map();
            response.questions.map((ele)=>{
                const res = {
                    optionIdSelected:null,
                    answerCorrect:null,
                    attempted:false,
                    solution:ele.detailed_solution,
                    options:ele.options,
                    question : ele.description
                }
                map.set(ele.id,res);
            })
            Attempt.setAttemptMap(map);
            // console.log(response.questions);
        }
        getQuizData();
    },[])



    return(
    <div style={{background:"transparent"}}>
        <QuestionCard QuestionTopic={QuestionSet[Question.QuestionNumber-1]?.topic} QuestionId = {QuestionSet[Question.QuestionNumber-1]?.id} Question={QuestionSet[Question.QuestionNumber-1]?.description} Option = {QuestionSet[Question.QuestionNumber-1]?.options} solution = {QuestionSet[Question.QuestionNumber-1]?.detailed_solution}></QuestionCard>
    </div>
    );
}

export default Home;


// const rightSvg = <svg style={{height:"25px",width:"25px",fill:"#40C057"}} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
// <path d="M 25 2 C 12.317 2 2 12.317 2 25 C 2 37.683 12.317 48 25 48 C 37.683 48 48 37.683 48 25 C 48 20.44 46.660281 16.189328 44.363281 12.611328 L 42.994141 14.228516 C 44.889141 17.382516 46 21.06 46 25 C 46 36.579 36.579 46 25 46 C 13.421 46 4 36.579 4 25 C 4 13.421 13.421 4 25 4 C 30.443 4 35.393906 6.0997656 39.128906 9.5097656 L 40.4375 7.9648438 C 36.3525 4.2598437 30.935 2 25 2 z M 43.236328 7.7539062 L 23.914062 30.554688 L 15.78125 22.96875 L 14.417969 24.431641 L 24.083984 33.447266 L 44.763672 9.046875 L 43.236328 7.7539062 z"></path>
// </svg>

// const wrongSvg = <svg style={{height:"25px",width:"25px"}} xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 508.33"><path fill="#EB0100" d="M317.99 323.62c-17.23-19.89-35.3-40.09-54.23-60.09-62.06 59.35-119.53 126.18-161.12 201.73-51.02 92.68-126.31 16.84-92.15-50.33 27.46-61.28 98.07-146.3 182.94-220.07-46.74-41.72-97.97-79.34-154.08-107.07C-42.76 47.2 19.97-20.82 79.37 6.16c50.04 19.82 119.09 70.85 182.26 134.32 63.11-45.86 129.55-81.8 189.45-95.87 13-3.06 50.95-11.33 59.69 1.04 3.29 4.67-.33 11.68-7.08 19.29-22.99 25.96-84.78 67.12-114.72 90.82-21.61 17.11-43.55 34.99-65.37 53.71 23.2 28.81 43.94 58.64 60.47 88.17 14.37 25.66 25.55 51.1 32.42 75.46 3.14 11.13 11.75 43.64 1.38 51.66-3.91 3.03-10.11.16-16.95-5.38-23.34-18.89-61.29-70.77-82.93-95.76z"/></svg>

