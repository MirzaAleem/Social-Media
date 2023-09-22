import { useEffect, useState } from 'react'
import Post from "../post/Post";
import Share from '../share/Share'
import './feed.css'
import axios from 'axios'

export default function Feed({ username }) {
  const [posts,setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/post/profile/" + username)
        : await axios.get("post/timeline/646eed5e20b53fdeb7cb8585");
      setPosts(res.data.sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt))); //Sort with newest first
    };
    fetchPosts();
  }, [username]);
  
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>

       {posts.map((p)=>(
        <Post key={p._id} post={p}/>
       ))}

      </div>
    </div>
  )
}
