
import { Input } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import {useState}  from 'react'
import axios from "axios";
export function Addstudent() {
  const [name,setName]=useState("");
  const [url,setUrl]=useState("");
  const [bod,setBod]=useState("");
  const [fee,setFees]=useState("");
  const [long,setLong]=useState("");
    const [latt,setLatt]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [location,setLocation]=useState("");
  const [description,setDesc]=useState("");
  const [surl,setSurl]=useState("");
  const [category,setCategory]=useState("");
  const [images,setImage]=useState("")
  const handleImage=(e)=>{
    console.log(e.target.files)
    setImage(e.target.files)
  }
  const handleChange = (category) => {
    setCategory(category);
  };
  const config={
    headers:{
      'content-type': 'multipart/form-data',
    }
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();



    console.log(name,url,bod,fee,long,latt,email,phone,location,description,category,surl,images)
    try{
      const resp= await axios.post("http://localhost:4000/api/school/create",{
        name:name,
        boardOfEduction:bod,
        latitude:latt,
        longitude:long,
        fees:fee,
        category:category,
        address:location,
        phone:phone,
        url:surl,
        description:description,
        matterport:url,
        schoolPictures:images
      },config)
      console.log(resp.data)
    }catch(error)
{
  console.log(error.response)
}
  }
 
  console.log(category)
  return (
    <div className="">
      <form onSubmit={handleSubmit} >
        <div className="mb-4 flex flex-row gap-10">
          <div className="w-full">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              for="name"
            >
              School Name
            </label>
            <Input variant="outlined" label="School" id="name" value={name} 
            onChange={(e)=>setName(e.target.value)} />
          </div>

          <div className="w-full">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              
            >
              Board Of education
            </label>
            <Input variant="outlined" label="Board Of Education"
            id="bod"
            value={bod}
            onChange={(e)=>setBod(e.target.value)} />
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
            value={url}
            onChange={(e)=>setUrl(e.target.value)} />
          </div>
          <div className="w-full">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              for="name"
            >
              Fees
            </label>
            <Input variant="outlined" label="Fees" id="fees"  value={fee}
            onChange={(e)=>setFees(e.target.value)} 
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
             value={long}
             onChange={(e)=>setLong(e.target.value)} />
          </div>

          <div className="w-full">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              for="lattitude"
            >
              lattitude
            </label>
            <Input variant="outlined" label="lattitude"
             value={latt}
             onChange={(e)=>setLatt(e.target.value)} />
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
             value={email}
             onChange={(e)=>setEmail(e.target.value)} />
          </div>

          <div className="w-full">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              for="phone"
            >
              phone
            </label>
            <Input variant="outlined" label="phone"
             value={phone}
             onChange={(e)=>setPhone(e.target.value)} />
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
      <Select label="Select Category" value={category} onChange={handleChange} >
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
             value={surl}
             onChange={(e)=>setSurl(e.target.value)} />
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
           value={location}
           onChange={(e)=>setLocation(e.target.value)} />
        </div>
        <div className="mb-6">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            for="Description"
          >
            Description
          </label>
          <Textarea color="blue" label="Description"
           value={description}
           onChange={(e)=>setDesc(e.target.value)} />
        </div>
        <div className="flex justify-start">
          <div className="mb-3 w-96">
            <label
              for="formFileMultiple"
              className="form-label mb-2 inline-block text-gray-700"
            >
              Images(upload multiple files)
            </label>
            <input
              className="form-control
        m-0
        block
        w-full
        rounded
        border
        border-solid
        border-gray-300
        bg-white bg-clip-padding
        px-3 py-1.5 text-base
        font-normal
        text-gray-700
        transition
        ease-in-out
        focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
              type="file"
              id="formFileMultiple"
              multiple
              onChange={handleImage}
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Addstudent;
