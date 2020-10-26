import React from 'react';
import { useEffect, useState } from 'react';
import AllPost from '../AllPost';

const Post = () => {
     // const[likeColor, setLikeColor] = useState('');
  // const  likeHandle = () => {
  //   const color  = likeColor ? '' : "primary"
  //   setLikeColor(color)
  // }
const [users, setUsers] = useState([]);

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => setUsers(data))
},[])

    return (
        <div>
            <h1>All post</h1>
             {
       users.map(user => <AllPost users={user} >
     
       </AllPost>)
     }
        </div>
    );
};

export default Post;