import { Cancel, EmojiEmotions, Label, PermMedia, Room } from '@mui/icons-material'
import './share.css'
import { useContext, useRef, useState } from 'react'
import { AuthContext } from "../../Context/AuthContext";
import axios from 'axios';
import {baseUrl} from '../../api_url'

export default function Share() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const { user } = useContext(AuthContext);
  const desc =  useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    alert("Posting... Click OK")
    const newPost = {
        userId: user._id,
        desc: desc.current.value,
        img: null
  }
  if (file) {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'social-media')
    data.append('cloud_name','dxwnemtgy')
    data.append('folder','Ayila')

    newPost.img = file.name; // Set the file name as the image name in MongoDB
   
    try {
      //uploads image on cloudinary
      await fetch('https://api-ap.cloudinary.com/v1_1/dxwnemtgy/image/upload',{
        method: 'POST',
        body: data,
      })
      .then(res => res.json())
      .then((data)=> {
        console.log(data)
        newPost.img = data.secure_url // Set the image url in MongoDB
      })
      .catch(err => console.log(err))
    } catch (error) {
      console.log(error);
    }
  }  

  try {
    await axios.post(baseUrl + '/post', newPost);
    window.location.reload();
  } catch (error) {
    console.log(error)
  }
}

  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img src={PF + "me.jpeg"} alt="Profile" className="shareProfileImg" />
                <input type="text" placeholder={"What's in your mind " + user.username + " !"} className="shareInput" ref={desc}/>
            </div>
            <hr className="shareHr" />
            {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
            <Cancel className="shareCancelImg" onClick={() => setFile(null)} />
          </div>
        )}
            <form className="shareBottom" encType="multipart/form-data" onSubmit={submitHandler}>
                <div className="shareOptions">
                    <label htmlFor='file' className="shareOption">
                        <PermMedia htmlColor='Tomato' className='shareIcon'/>
                        <span className="shareOptionText">Photo or Video</span>
                        <input style={{display: "none"}} type="file" name='file' id='file' encType="multipart/form-data" accept='.jpg, .jpeg, .png' onChange={(e)=> setFile(e.target.files[0])}/>
                    </label>
                    <div className="shareOption">
                        <Label htmlColor='blueviolet' className='shareIcon'/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor='chocolate' className='shareIcon'/>
                        <span className="shareOptionText">Locations</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor='Gold' className='shareIcon'/>
                        <span className="shareOptionText">Feelings</span>
                    </div>                    
                </div>
                <button className="shareButton" type='submit' >Share</button>
            </form>
        </div>
    </div>
  )
}
