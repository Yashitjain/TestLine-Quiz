import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

export default function DetailedSolution(props) {
  return (
    <div>
        <Accordion defaultActiveKey="0" >
            <Accordion.Item eventKey="1" >
                <Accordion.Header >Explanation</Accordion.Header>
                    <Accordion.Body >
                        {props.solution}
                    </Accordion.Body>
            </Accordion.Item>
      </Accordion>
    </div>
  )
}
