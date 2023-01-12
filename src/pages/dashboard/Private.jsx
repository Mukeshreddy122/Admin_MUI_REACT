import * as  React from 'react';
// import MUIDataTable from "mui-datatables";
import DataTable from 'react-data-table-component';
import Button from '@mui/material/Button';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { useState,useEffect } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import { Addstudent } from './Addstudent';
import {Viewstudent} from "./viewstudent"
import axios from 'axios';
import { ContentPasteSearchOutlined } from '@mui/icons-material';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 650,
  height:700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflow:'scroll',

};

export function Private() {
  const [open, setOpen] = React.useState(false);//add
const [o1,seto1]= React.useState(false);//view
  // const [close, setClose] = React.useState(true);
 //view
 const [id,setId]=useState(null);
  const handleOpen = (id) => {
    seto1(true);
    setId(id);
  }

  const handleClose = () => seto1(false);


//add school
  const handleOpen1 = () => setOpen(true);
  const handleClose1 = () => setOpen(false);
  const [schools,setSchools]=useState([])
  useEffect(() => {
  axios.get("http://localhost:4000/api/schools").then((res)=>{
    setSchools(res.data.school)
    console.log(res)
  
  }).catch(err=>{
    console.log(err)
    })
}, [])
//console.log(schools)


    const columns = [
      { name: "School Name",
        selector: (row) =>row.name,
       width:"18rem"
    },
      { name: "Board of education",
      selector: (row) =>row.boardOfEduction,

    },
    {
     name: "Fees",
     selector: (row) =>row.fees,


    },
     
     
      {
        name: "Actions",
        
cell:(row) =>  [ <Button   onClick={()=>handleOpen(row._id)}   /*onClick={handleOpen*/>  <RemoveRedEyeIcon /> </Button>,
  <Button onClick={()=>alert(row._id)}   /*onClick={handleOpen1}*/> <EditIcon /> </Button>,
 <Button onClick={()=>alert(row._id)}>  <DeleteIcon />   </Button>,
]
            
          }
        
      
    ];
 
    // const data = [
    //   ["s","s","s","S"]
    //  ];
// const data=[]
//      schools.map((scl)=>{
//       data.push([scl.name, scl.boardOfEduction, scl.fees, scl.latitude])

//   })
    
   

    return (
      
      <div className="mt-12  flex flex-col ">
      <Card>
        <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Schools 
          </Typography>
        </CardHeader>
        <div className="pl-20 pb-7 " >
        <div className='mb-4'>
          <div>
      <Button variant="contained"   onClick={handleOpen1}>Add School</Button>
      </div>
      <Modal
        open={o1}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
       
      >
        <Box sx={style}>
         <IconButton onClick={handleClose} className="relative left-full " aria-label="close">
       <CloseIcon  />
       </IconButton>
       <Viewstudent  id={id} schools={schools}/>
          
        </Box>
      </Modal>
  
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         <IconButton onClick={handleClose1} className="relative left-full " aria-label="close">
       <CloseIcon  />
       </IconButton>
          <Addstudent/> 
        </Box>
      </Modal>
    </div>
    <div className=" shadow-2xl w-11/12 border-2  ">
      <DataTable
        title={"Schools"}
        data={schools}
        columns={columns}
        fixedHeader
        fixedHeaderScrollHeight='400px'
        pagination
        highlightOnHover
      />
      </div>
      </div>
      </Card>
      </div>
    );
  }

export default Private;
