import './profile.css'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import { useContext,useEffect, useState } from "react";
import axios from "axios";
import {baseUrl} from '../../api_url'
import { AuthContext } from "../../Context/AuthContext";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const [user, setUser] = useState({})
  const {user: currentUser} = useContext(AuthContext);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(baseUrl + `/users/${currentUser._id}`);
      setUser(res.data)
      console.log()
    };
    fetchUser();
  }, [currentUser]);
  return (
    <>
      <Topbar/>
      <div className="profile">
        <Sidebar/>
        <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                <img src={user.coverPicture || "https://picsum.photos/800"} alt="" className="profileCoverImg" />
                <img src={PF + "me.jpeg"} alt="" className="profileUserImg" />    
              </div>
              <div className="profileInfo">
                <h4 className="profileInfoName">{user.username}</h4>
                <div className="profileInfoDesc">{user.desc}</div>
              </div>
            </div>
            <div className="profileRightBottom">

            <Feed username={user.username}/>
            <Rightbar user={user}/>

            </div>
        </div>
      </div>
    </>
  )
}
