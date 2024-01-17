import React,{useState} from 'react'
import axios from 'axios';

export default ({postId})=>{
    const [content, setcontent] = useState('');
    const onSubmit =async(event)=>{
        event.preventDefault();
        await axios.post(`http://posts.com/posts/${postId}/comments`,{
            content
        });
        setcontent('')
    }
  return (
    <div>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>New Comment</label>
                <input value={content} 
                onChange={e=>setcontent(e.target.value)} className='form-control'/>
            </div>
            <button className="btn btn-primary">submit</button>
        </form>
    </div>
  )
}
