import {React,useState} from 'react'
import Post from './Post'
import  "./PostList.css"
import NewPost from './NewPost'
import Module from './Module'
function PostList(props) {
const[arr ,setarr]=useState([])
const setData =(datum) =>{
  setarr(prev => {
    return [...prev ,datum]
  })
}
  return (
<>
{
  props.CondationShow ?<Module >
  <NewPost data={setData}></NewPost>
  </Module> :null
}

    <ul className="posts">
{
  arr.length > 0 ?arr.map(item => <Post key={item.id} el={item}></Post>) :""
}
    </ul>
  </>
  )
}
export default PostList