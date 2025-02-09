import React from 'react'
import {useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';

export default function Start() {
    const navigate = useNavigate();
  return (
    <div  style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'100vh',
        width:'auto'
    }}>
        <Button className='startButton'
            variant="success" 
            onClick={()=>navigate('/home')}
            style={{
                fontSize:'2rem',
                fontWeight:'bolder',
                width:'auto',
                height:'5rem',
                // padding:'3rem',
            }}
        >
            Start Quiz
        </Button>
      
    </div>
  )
}
