import Online from '../online/Online'
import './rightbar.css'
import {Users} from '../../DummyData'

export default function Rightbar({ user }) {
  const HomeRightbar = () =>{
    return(
      <>
      <div className="birthdayContainer">
          <img src="https://cdn-icons-png.flaticon.com/512/5717/5717488.png" alt="birthday gift" className="birthdayImg" />
          <span className="birthdayText">
            <b>Saba</b> and <b>3 Others</b> have Birthday Today !
          </span>
        </div>
        <img src="https://www.vskills.in/certification/blog/wp-content/uploads/2019/03/Advertisement-Media.jpg" alt="Advertisement" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
        {Users.map((u)=>(
          <Online key={u.id} user={u}/>
        ))}
        </ul></>
    )
  }
  
const ProfileRightbar = () =>{
  return(
    <>
    <h4 className="rightbarTitle">User Information</h4>
    <div className="rightbarInfo">
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">City:</span>
        <span className="rightbarInfoValue">{user.city}</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Age:</span>
        <span className="rightbarInfoValue">{user.age}</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Relationship:</span>
        <span className="rightbarInfoValue">{user.relationship === 1 ? "Single" : user.relationship === 2 ? 'Married' : '' }</span>
      </div>
    </div>
    <h4 className="rightbarTitle">User Friends</h4>
    <div className="rightbarFollowings">
      <div className="rightbarFollowing">
        <img src="https://picsum.photos/200" alt="Following Freinds" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Samuel</span>
      </div>
      <div className="rightbarFollowing">
        <img src="https://picsum.photos/210" alt="Following Freinds" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Samuel</span>
      </div>
      <div className="rightbarFollowing">
        <img src="https://picsum.photos/220" alt="Following Freinds" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Samuel</span>
      </div>
      <div className="rightbarFollowing">
        <img src="https://picsum.photos/230" alt="Following Freinds" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Samuel</span>
      </div>
      <div className="rightbarFollowing">
        <img src="https://picsum.photos/240" alt="Following Freinds" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Samuel</span>
      </div>
      <div className="rightbarFollowing">
        <img src="https://picsum.photos/250" alt="Following Freinds" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Samuel</span>
      </div>
      <div className="rightbarFollowing">
        <img src="https://picsum.photos/270" alt="Following Freinds" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Samuel</span>
      </div>
      <div className="rightbarFollowing">
        <img src="https://picsum.photos/280" alt="Following Freinds" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Samuel</span>
      </div>
    </div>
    </>
  )
}

  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  )
}
