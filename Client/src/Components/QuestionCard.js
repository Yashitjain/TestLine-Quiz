import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext,useState,useEffect } from "react";
import { QuestionContext } from '../ContextApi/QuestionContext';
import Result from './Result';
import { AttemptContext } from '../ContextApi/Attempt';




export default function QuestionCard(props) {

  const Question = useContext(QuestionContext);
  const Attempt = useContext(AttemptContext);
 
  function CheckAnswer(isCorrect,questionId,optionId){
    const obj = Attempt.AttemptMap.get(questionId);
    obj.optionIdSelected = Attempt.AttemptMap?.get(props.QuestionId)?.optionIdSelected == optionId ? null : optionId
    obj.answerCorrect = isCorrect
    obj.attempted = Attempt.AttemptMap?.get(props.QuestionId)?.optionIdSelected != null ? true : false

    const newMap = new Map(Attempt.AttemptMap);
    newMap.set(questionId,obj);
    Attempt.setAttemptMap(newMap);
    // console.log("Condition: ",Attempt.AttemptMap.get(questionId).attempted == true  && Attempt.AttemptMap.get(questionId).answerCorrect == true)


  }

  function NextQuestion(){
    Question.setQuestionNumber(Question.QuestionNumber + 1);
  }

  function PreviousQuestion(){
    Question.setQuestionNumber(Question.QuestionNumber - 1);
  }

  useEffect(()=>{
    // console.log("Attempt Map",Attempt.AttemptMap)
  },[Attempt.AttemptMap])

  return (
    <div style={{background:'transparent'}}>
    {Question.QuestionNumber <= 10 ? 
      <>
        <h1 style={{color:'white'}}>Quiz</h1>
        <div style={{background:'transparent'}} className="QuestionCard" > 
          <Card  className='QuestionCard' style={{ width: '75%',background:'transparent',color:'white'}}>
          <Card.Body style={{width:"90%"}}>
            <Card.Title style={{fontWeight:"bolder",fontSize:"1.5rem"}}>Q{Question.QuestionNumber}.) {props.QuestionTopic}</Card.Title>
            <Card.Text className='questionDescription' style={{textAlign:"center"}}>
              {props.Question}
            </Card.Text>
            {(props.Option)?.map((e,index)=>{
              return <li className="optionList" key = {index}>
                <Button style={{color:'white'}} className='optionButton' variant={Attempt.AttemptMap?.get(props.QuestionId)?.optionIdSelected == e.id ? "primary" : "outline-secondary"} onClick={(eve)=>CheckAnswer(e.is_correct,props.QuestionId,e.id)}>
                  {e.description} 
                </Button></li>
            })}
            <div style={{background:'transparent'}} className='PrevnextButton'>
              {Question.QuestionNumber > 1 ? <Button className='previousButton' variant='danger' onClick={PreviousQuestion}>Previous</Button> : ""}
              {Question.QuestionNumber < 10 ? <Button className='nextButton' variant='success' onClick={NextQuestion}>Next</Button> : ""}
              {Question.QuestionNumber == 10 ? <Button className='nextButton' variant='primary' onClick={NextQuestion}>Submit</Button> : ""}   
            </div>
          </Card.Body>
          </Card>
        </div>
      </>
    : <Result ></Result>}
    </div>
  )
}
