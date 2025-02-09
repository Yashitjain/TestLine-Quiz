import React, { useContext, useEffect, useState } from 'react'
import { AttemptContext } from '../ContextApi/Attempt'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import DetailedSolution from './DetailedSolution'

export default function Result(props) {
    const Attempt = useContext(AttemptContext);
    const [Score,SetScore] = useState(0);

    useEffect(()=>{
        let val = 0;
        Array.from(Attempt.AttemptMap.entries()).map(([key, values],index) =>{
            if(values.answerCorrect == true){ 
                val += 10;
            }
            // console.log(values.answerCorrect == true,key,Score)
        })
        SetScore(val);
    },[])
    // console.log("Score: ",Score) 
  return (
    <div>
        <h1 style={{background:'transparent',color:'white',marginTop:'1.5rem'}}>Result
            <h2 style={{background:'transparent',color:'white'}}>Score : {Score}</h2>
        </h1>
        
        <Container>
        {
            Array.from(Attempt.AttemptMap.entries()).map(([key, values],index) => (
                <Row key={key} style={{width:'100%',marginTop:"16px",background:'transparent',color:'white'}}>
                    <Col>
                        <Accordion defaultActiveKey="1" style={{width:'100%',marginTop:"16px",background:'transparent',color:'white'}}>
                            <Accordion.Item eventKey="1" style={{background:'transparent',color:'white'}}>
                                <Accordion.Header  className={values.answerCorrect ? "correct-answer" : "wrong-answer"}>Question {index+1}</Accordion.Header>
                                <Accordion.Body>
                                    <span style={{fontSize:'1.5rem', fontWeight:'bold'}}>{values.question}</span>
                                    <hr />
                                    <span style={{fontSize:'20px',fontWeight:"bolder"}}>Correct Answer:</span>
                                    <span style={{fontSize:'16px',fontWeight:"bold",marginLeft:'10px'}}>
                                        {values.options.map((ele)=>{
                                            if(ele.is_correct == true){ 
                                                return ele.description
                                            }
                                        })}
                                    </span><br/>
                                    <span style={{fontSize:'20px',fontWeight:"bolder"}}>Selected Answer:</span>
                                    <span style={{fontSize:'16px',fontWeight:"bold",marginLeft:'10px'}}>
                                        {values.options.map((ele)=>{
                                            if(ele.id == values.optionIdSelected) return (ele.description)
                                        })}
                                    </span>
                                    <hr />
                                    <DetailedSolution solution = {values.solution}></DetailedSolution>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            ))           
        }
        </Container>
    </div>
  )
}
