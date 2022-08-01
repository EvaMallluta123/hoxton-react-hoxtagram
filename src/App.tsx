import { useEffect, useState } from 'react'
import './App.css'
type Image={
  "id": number
  "title": string
  "likes": number
  "image": string
}

function App() {
  const [post, setPost]=useState([])
  const[coments, setComents]= useState([])
 useEffect(()=> {fetch(`http://localhost:3005/images`)
.then (resp=>resp.json())
.then(PostFromServer=>setPost(PostFromServer))
}, [])
useEffect(()=> {fetch(`http://localhost:3005/comments`)
.then (resp=>resp.json())
.then(comentsFromServer=>setComents(comentsFromServer))
}, [])

  return (
    <div className="App">
       <body>
    <img className="logo" src="src\public\assets\hoxtagram-logo.png" />

   
    <section className="image-container">
    <form className="comment-form image-card">
        <h2 className="title">New Post</h2>
        <input
          className="comment-input"
          type="text"
          name="title"
          id="title"
          placeholder="Add a title..."
        />
        <input
          className="comment-input"
          type="url"
          name="image"
          id="image"
          placeholder="Add an image url..."
        />
        <button className="comment-button" type="submit">Post</button>
      </form> 

     

      {post.map(posts=>(<article className="image-card">

     <h2 className="title">{posts.title}</h2>
        <img src={posts.image} className="image" />
        <div className="likes-section">
          <span className="likes">{posts.likes}</span>
          <button className="like-button">♥</button>
          
        </div>
        
        <ul className="comments">
        {coments.map(coment=>(<li>{coment.content}</li>
         ))} 
        </ul>
      </article>
      ))}  
    </section>
      
  </body>
  
    </div>
  )
}

export default App
