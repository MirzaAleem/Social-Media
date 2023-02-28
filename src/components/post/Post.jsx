import { MoreVert } from "@mui/icons-material"
import "./post.css"
import {Users} from '../../DummyData'
import { useState } from "react"

export default function Post({post}) {
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)
    const likeHandler = () =>{
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter((u)=>u.id ===  post.userId)[0]?.profilePicture} alt="Profile" className="postProfileImg" />
                    <span className="postUsername">{Users.filter((u)=>u.id ===  post.userId)[0]?.username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post.desc}</span>
                <img src={post.photo} alt="Post" className="postImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="./Assets/thumb-up.png" height='30px' alt="Like Icon" onClick={likeHandler} className="LikeIcon" />
                    <img src="./Assets/heart.png" height='30px' alt="Heart Icon" onClick={likeHandler} className="LikeIcon" />
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
