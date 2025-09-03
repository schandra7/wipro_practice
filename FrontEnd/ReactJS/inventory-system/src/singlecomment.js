import React from 'react';
 
import Profile from './Images/bill.jpeg'
import Profile1 from './Images/elon.jpeg'
import { SingleComment } from './SingleComment';
import { Registration } from './Registration';
 
const App = () => {
 
 return(
   <div className="ui comment">
    <SingleComment name="Preeti"
    date='Today at 5:00 pm'
    text="React Js blog"
    picture={Profile}
     />
 
     <SingleComment name="Sachin"
    date='Today at 5:00 pm'
    text="Angular blog"
    picture={Profile1}
     />
  </div>
 )
   }
 
export default App;