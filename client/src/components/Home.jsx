import React from 'react'



const Home = () => {
  const myStyle ={
color: 'blue',
marginTop: '200px',
textShadow:'3px 3px magenta',
letterSpacing: '6px',
fontFamily: 'Georgia'

  };

  const style = {
    color:'blue',
    textShadow:'2px 2px magenta',

  };


  return (
    <div>
      <h2 style={style}>Presented by Sarita kumrawat</h2>
      <h1 style={myStyle}>CRUD OPERATION</h1>
    </div>
  )
}

export default Home