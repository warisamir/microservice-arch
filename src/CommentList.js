import React from 'react'

export default ({comments})=> {
 

    const renderedComents=comments.map(comment=>{
    
      let content;
      if(comment.status==='approved'){
      content=comment.content;
      }
      if(comment.status==='pending'){
        content='this comment is awaitng';
      }
      if(comment.status==='rejected'){
        content='this comment is rejected';
      }
        return <li key={comment.id}>{content}</li>;
    });
  return (
    <ul>
        {renderedComents} 
    </ul>
  )
}

