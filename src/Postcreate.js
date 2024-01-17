import React,{useState} from 'react'
import axios from 'axios';

function Postcreate() {
    const [title, setTitle] = useState('')
    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post('http://posts.com/posts/create',{
            title
        });
        setTitle('');
    };
  return (
    <div>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="tit">title</label>
                <input value={title} onChange={e=>setTitle(e.target.value)} type="text" className="form-control" />
            </div>
            <button className="btn btn-primary">submit</button>
            
        </form>
    </div>
  )
}

export default Postcreate