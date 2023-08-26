import { MoreVert } from "@mui/icons-material"
import "./post.css"
import { useEffect, useState } from "react"
import axios from 'axios'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'  // or 'en-US'
import {Link} from "react-router-dom";

TimeAgo.addDefaultLocale(en)

export default function Post({post}) {
    const timeago = new TimeAgo('en-US')
    const createdAtDate = new Date(post.createdAt);

    const [like, setLike] = useState(post.likes.length)
    const [isLiked, setIsLiked] = useState(false)
    const [user, setUser] = useState({})

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const likeHandler = () =>{
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }

    useEffect(() => {
        const fetchUser = async () => {
          try {
            const res = await axios.get(`/users?userId=${post.userId}`);
            setUser(res.data);
          } catch (error) {
            console.error('Error fetching user data:', error);
            // You might want to set some error state here
          }
        };
    
        fetchUser();
      }, [post.userId]);

  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <Link to={"profile/"+user.username}>
                       <img src={ user.profilePicture || PF+"person/me.jpeg" } alt="Profile" className="postProfileImg" />
                    </Link>
                    <span className="postUsername">{user.username}</span>
                    <span className="postDate">{timeago.format(createdAtDate)}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post.desc}</span>
                <img src={PF + 'images/' + post.img} alt="Post" className="postImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="../Assets/thumb-up.png" height='30px' alt="Like Icon" onClick={likeHandler} className="LikeIcon" />
                    <img src="../Assets/heart.png" height='30px' alt="Heart Icon" onClick={likeHandler} className="LikeIcon" />
                    <span className="PostLikeCounter">{like} people like it</span>
                </div>
                <div className="postBotttomRight">
                    <span className="postCommentText">{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
