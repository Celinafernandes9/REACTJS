import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        post : [ ]
         
      }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>(
          this.setState({post: response.data})
        ))
        .catch(error=>{
          console.log(error);  
    })
    }
    
  render() {
    const{post}=this.state
    return (
      <div>
        {post.length?post.map(post=>
          <h3 key={post.id}>
            ID:{post.id} <br></br>
            Title: {post.title}</h3>):null
        }
        
      </div>
    )
  }
}

export default PostForm
