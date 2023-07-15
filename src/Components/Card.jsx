
import React from 'react';
import { click } from '@testing-library/user-event/dist/click';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';

const Card = (props) => {
    // hamne eik course k data bhej diya
let course = props.course;

//iske ander sabhi liked course honge jinke hamne like kiya 
     let likedCourses = props.likedCourses;
     let setLikedCourses = props.setLikedCourses;

     function clickHandler() {
    //     // Logic
    // mere likedcourses ke ander kya koi current course ki id padi hai kya
    // agar padi hai to => pehle se liked hai vo
    if (likedCourses.includes(course.id)) {
    //         // pahle se liked pada tha
    // agar pehle se liked hai to filter kr do => jo liked h usko chhod do remaing ko likedcourse ke ander fill kr do
            setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
            toast.warning("Liked Removed");
     }
         else {
    //         // pahle se like nahi hai course 
    //         // insert karne h y course like course me 
             if (likedCourses.length === 0) {
                setLikedCourses([course.id]);
             }
            else {
             setLikedCourses((prev) => [...prev,course.id]);
           }
             toast.success("Liked Successfully");
         }
     }

    return (
        <div className='bg-bgDark bg-opacity-80 w-[300px] rounded-md overflow-hidden relative'>

<div className='relative '>
 <img src={course.image.url}  alt='Web Development Fundamentals'/>
</div>

<div className='rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-36 grid place-items-center'>
    <button onClick = {clickHandler}>
 {  
 // agar tumhara likedcorse ke ander pada hai to like ha tumhar course
 likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem" />) : (<FcLikePlaceholder fontSize="1.75rem" />) 
 
 
 
 }
    </button>
   
</div>

<div className='p-4'>

<p className='text-white text-lg font-semibold leading-6'>{course.title}</p>
<p className='mt-2 text-white'> 

{
   props.course.description.length > 100 ? (props.course.description.substring(0, 100) + "...") : (props.course.description)
}
</p>
  
  {/* ham description ki puri length nhi dikhana chahte hain */}



</div>


        </div>


    
    )
}

export default Card