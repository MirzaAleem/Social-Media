import { useEffect, useState } from 'react'
import Post from "../post/Post";
import Share from '../share/Share'
import './feed.css'
import axios from 'axios'
import {baseUrl} from '../../api_url'

export default function Feed({ username }) {
  const [posts,setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get(baseUrl + "/post/profile/" + username)
        : await axios.get(baseUrl + "/post/timeline/646ede758e0ce4bc5e8426d8");
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
