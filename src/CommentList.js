import React from 'react'

export default ({comments})=> {
 

    const renderedComents=comments.map(comments=>{
        return <li key={comments.id}>{comments.content}</li>;
    });
  return (
    <ul>
        {renderedComents} 
    </ul>
  )
}

