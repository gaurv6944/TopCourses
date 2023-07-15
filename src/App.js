import React from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import Spinner from "./Components/Spinner";
import { apiUrl, filterData } from "./data.js";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const App = () => {
  // const [courses, setCourses] = useState(null);
  const [courses, setCourses] = useState(null);

  // jab data nahi tab tak spinner show kro
  const [loading, setLoading] = useState(true);

  // by default we onlw to show all wala part . filter part ke liye
  const [category, setCategory] = useState(filterData[0].title);


// api call ke liye function that will fectch data from api call
  const fetchData = async () => {

    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();

      // copy kr do sare data ko setCourses ke ander
      setCourses(output.data);
      // setCourses(output);
    }
     catch (error) {
      toast.error("Something Went Wrong");
    }

    // jab data a jaye tab loading ko false kr do
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (

<div className="min-h-screen flex-col flex bg-bgDark2">
  {/* heading part */}
<div>
<Navbar></Navbar>
</div>

<div className="bg-bgDark2">

<div>
  <Filter filterData = {filterData}
  
  // category part sending 
  category = {category}
  setCategory = {setCategory}
  
  ></Filter>
</div>

<div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
  {

loading ? (<Spinner/>) : ( <Cards  courses = {courses} category = {category}/>)

  }

</div>

</div>

</div>






















    // <div className="min-h-screen flex-col flex bg-bgDark2">
    //   <div>
    //     <Navbar />
    //   </div>

    //   <div className="bg-bgDark2">
    //     <div>
    //       <Filter
    //         filterData={filterData}
    //         category={category}
    //         setCategory={setCategory}
    //       />
    //     </div>

    //     <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
    //       {
    //         laoding ? (
    //           <Spinner />
    //         ) : (
    //           <Cards courses={courses} category={category} />
    //         )
    //       }
    //     </div>
    //   </div>
    // </div>
  );
};

export default App;
