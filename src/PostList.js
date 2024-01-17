import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';
function PostList() {
    const [posts, setposts] = useState({});
    const fetchpost=async()=>{
      const res=await axios.get('http://posts.com/posts');
      // console.log(res.data);
     setposts(res.data);
    };
    useEffect(()=>{
      fetchpost();
    },[])
    const rendererposts=Object.values(posts).map(post=>{
      return <div 
      className='card' 
      style={{width:'30%',marginBottom:'20px'}}
      key={post.id}>
        <div className="card-body">
           <h3>{post.title}</h3>
           <CommentList comments={post.comments}/>
           <CommentCreate postId={post.id}/>
        </div>
      </div>
    })
    // console.log(posts);
  return (
    <div className='d-flex flex-row flex-wrap justify-content-between'>
        {rendererposts}
    </div>
  )
}

export default PostList