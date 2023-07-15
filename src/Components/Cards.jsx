import Card from "./Card";
import React, { useState } from 'react'

const Cards = (props) => {

    let courses = props.courses;
    let category = props.category;
    const [likedCourses,setLikedCourses] = useState([]);
    function getCourses() {

    // sabhi category nahi dikhani hai kewal wahi dikhani jo jish pr click hus hai
    if(category == "All")
    {
        let allCourses = [];
        Object.values(courses).forEach(array => {
            array.forEach(courseData => {
                allCourses.push(courseData);
            })
        })

        return allCourses;

    }

    else{
// main sirf specific category k data  pass krunga 

return courses[category];

    }
       

     
    }
    
    return (
       <div className="flex flex-wrap justify-center gap-4 mb-4">

{
    getCourses().map( (course) => (
        <Card key = {course.id} course = {course}
        likedCourses = {likedCourses} 
        setLikedCourses = {setLikedCourses}/>
    ))
}


       </div>
       
       
       
       
       
       
        


    )

}

export default Cards;
