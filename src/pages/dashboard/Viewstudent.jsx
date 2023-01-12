import { useState,useEffect } from 'react';
import axios from 'axios';

  import { Input } from "@material-tailwind/react";
  import { Textarea } from "@material-tailwind/react";
  import { Select, Option } from "@material-tailwind/react";

  export function Viewstudent({id}) {
    console.log(id)


  // school by id
  const [sch,setSch]=useState([])
useEffect(() => {
axios.get("http://localhost:4000/api/school/"+id).then((res)=>{
  setSch(res.data.school)
  console.log(res.data.school)
}).catch(err=>{
  console.log(err)
  })
}, [])


    return (
       
      
      <div className="">
      <form >
        <div className="mb-4 flex flex-row gap-10">
          <div className="w-full">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              for="name"
            >
              School Name
            </label>
            <Input variant="outlined" label="School" id="name" value={sch.name} disabled
           />
          </div>

          <div className="w-full">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              
            >
              Board Of education
            </label>
            <Input variant="outlined" label="Board Of Education"
            id="bod"
            value={sch.boardOfEduction}   disabled          />
          </div>
        </div>
        <div className="mb-4 flex flex-row gap-10">
        <div className="w-full">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              for="virtual"
            >
              Virutual url
            </label>
            <Input variant="outlined" label=" URl"
            id="virtual"
            value={sch.url} disabled
            />
          </div>
          <div className="w-full">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              for="name"
            >
              Fees
            </label>
            <Input variant="outlined" label="Fees" id="fees"  value={sch.fees} disabled
             />
          </div>

         
        </div>
        <div className="mb-4 flex flex-row gap-10">
          <div className="w-full">
            <label
              className="mb-2 block text-sm font-bold text-gray-700 "
              for="longitude"
            >
              longitude
            </label>
            <Input variant="outlined" label="longitude"
             value={sch.longitude} disabled
     />
          </div>

          <div className="w-full">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              for="lattitude"
            >
              lattitude
            </label>
            <Input variant="outlined" label="lattitude"
             value={sch.latitude} disabled
            />
          </div>
        </div>
        <div className="mb-4 flex flex-row gap-10">
          <div className="w-full">
            <label
              className="mb-2 block text-sm font-bold text-gray-700 "
              for="email"
            >
              Email
            </label>
            <Input variant="outlined" label="Email"
             disabled
         />
          </div>

          <div className="w-full">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              for="phone"
            >
              phone
            </label>
            <Input variant="outlined" label="phone"
             value={sch.phone} disabled
 />
          </div>
        </div><div className="mb-4 flex flex-row gap-10">
          <div className="w-full">
            <label
              className="mb-2 block text-sm font-bold text-gray-700 "
              for="category"
            >
              Category
            </label>
           <div >
      <Select label="Select Category" value={sch.category} disabled  >
        <Option value={"63709eeffff22123db80848d"} >Government</Option>
        <Option value={20}  >private</Option>
 
      </Select>
    </div>
          </div>

          <div className="w-full">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              for="SCHOOL URL"
            >
             School URL
            </label>
            <Input variant="outlined" label="school url"
             value={sch.url} disabled
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            for="location"
          >
            Location
          </label>
          <Input variant="outlined" label="school address"
           value={sch.address} disabled
           />
        </div>
        <div className="mb-6">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            for="Description"
          >
            Description
          </label>
          <Textarea color="blue" label="Description"
           value={sch.description} disabled
            />
        </div>
        
        <div className="flex items-center justify-between">
         
        </div>
      </form>
    </div>
  );
  }
  
  export default Viewstudent;
  