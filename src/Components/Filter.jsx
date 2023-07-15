import React from "react";

const Filter = (props) => {
  // console.log(props);
  let filterData = props.filterData;

  // receiving data of category
  let category = props.category;
  let setCategory = props.setCategory;

  function filterHandler(title) {
    setCategory(title);
  }

  return (

    <div  className="w-11/12 flex flex-wrap max-w-max space-x-4 mx-auto gap-y-4 py-4 justify-center">

{
  filterData.map( (data) => (
    <button  
    
    className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black border-2 hover:bg-opacity-50 transition-all duration-200
          
            ${
         // kaun sa filter select uska logic
            // for hight karne ke liye
               category === data.title
                 ? "bg-opacity-60 border-white"
                : "bg-opacity-40 border-transparent"
              }
            `}
     
    key={data.id}

    // hamne filter part me title pr click kr rhe hain so uska data bheja jyaega
     onClick={() => filterHandler(data.title)} 
    > 
    {data.title}
    </button>

  ))
}

    </div>










 

  )
}

export default Filter;
