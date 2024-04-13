import React from 'react'
import "./blog.css"
import blog1 from '../../assets/blog1.png';
import blog2 from '../../assets/blog2.png';
function Blog() {
  return (
    <div className='blog_area'>
    <div className="blog_header">
   <h1> A lot is happening, We are blogging about it.   </h1>

    </div>
    <div className="blog_main">
   <div className='blog_part_1'>
    <div className="part_one_image">
    <img src={blog1}/>
    </div>
    <div className="part_one_content">
    <p>Sep 26, 2021</p>
    <h2>GPT-3 and Open AI is the future. Let us exlore how it is?</h2>
    </div>
    <div className="part_one_more">
     <p>more</p>
    </div>
   
  
   </div>
   
   <div className='blog_part_2'>

   <div className='blog_part_two_1'>
    <div className="part_2_image">
    <img src={blog2}/>
    </div>
    <div className="part_2_content">
    <p>Sep 26, 2021</p>
    <h2>GPT-3 and Open AI is the future. Let us exlore how it is?</h2>
    </div>
    <div className="part_two_more">
     <p>more</p>
    </div>
   
  
   </div>

   <div className='blog_part_two_1'>
    <div className="part_2_image">
    <img src={blog2}/>
    </div>
    <div className="part_2_content">
    <p>Sep 26, 2021</p>
    <h2>GPT-3 and Open AI is the future. Let us exlore how it is?</h2>
    </div>
    <div className="part_two_more">
     <p>more</p>
    </div>
   
  
   </div>
   <div className='blog_part_two_1'>
    <div className="part_2_image">
    <img src={blog2}/>
    </div>
    <div className="part_2_content">
    <p>Sep 26, 2021</p>
    <h2>GPT-3 and Open AI is the future. Let us exlore how it is?</h2>
    </div>
    <div className="part_two_more">
     <p>more</p>
    </div>
   
  
   </div>
   <div className='blog_part_two_1'>
    <div className="part_2_image">
    <img src={blog2}/>
    </div>
    <div className="part_2_content">
    <p>Sep 26, 2021</p>
    <h2>GPT-3 and Open AI is the future. Let us exlore how it is?</h2>
    </div>
    <div className="part_two_more">
     <p>more</p>
    </div>
   
  
   </div>
   
   </div>
    </div>

    </div>
  )
}

export default Blog