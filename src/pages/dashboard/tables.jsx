import * as  React from 'react';
import MUIDataTable from "mui-datatables";
import Button from '@mui/material/Button';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
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
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 650,
  height: 735,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export function Tables() {
  const [open, setOpen] = React.useState(false);
  // const [close, setClose] = React.useState(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    const columns = [
      { name: "School Name" },
      { name: "Board of education" },
      "Email",
      "Founder ",
     
      {
        name: "Actions",
        options: {
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <div>
             <RemoveRedEyeIcon/> ,
             <EditIcon/>
             <DeleteIcon/>
             </div>
            );
          }
        }
      }
    ];

    const data = [
      ['Nmrec', 'CBSE', "nmrec@nmrec.edu.in", "Nalla Malla Reddy"],
      [ 'Nmrec', 'CBSE', "nmrec@nmrec.edu.in", "Nalla Malla Reddy"],
      ['Nmrec', 'CBSE', "nmrec@nmrec.edu.in", "Nalla Malla Reddy"],
      [ 'Nmrec', 'CBSE', "nmrec@nmrec.edu.in", "Nalla Malla Reddy"],
      [ 'Nmrec', 'CBSE', "nmrec@nmrec.edu.in", "Nalla Malla Reddy"],
      [ 'Hyd', 'CBSE', "nmrec@nmrec.edu.in", "Nalla Malla Reddy"],
      [ 'Nmrec', 'CBSE', "nmrec@nmrec.edu.in", "Nalla Malla Reddy"],
      [ 'Nmrec', 'CBSE', "nmrec@nmrec.edu.in", "Nalla Malla Reddy"],
      [ 'Dav', 'CBSE', "nmrec@nmrec.edu.in", "Nalla Malla Reddy"],

      
    ];

    const options = {
      filterType: "dropdown",
      responsive: "scroll",
      selectableRows: false
    };
   
  
    
    
   

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
      <Button variant="contained"   onClick={handleOpen}>Add School</Button>
      </div>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         <IconButton onClick={handleClose} className="relative left-full " aria-label="close">
       <CloseIcon  />
       </IconButton>
          <Addstudent/>
        </Box>
      </Modal>
    </div>
      <MUIDataTable
        title={"Schools"}
        data={data}
        columns={columns}
        options={options}
        className="w-11/12 "
      />
      </div>
      </Card>
      </div>
    );
  }

export default Tables;
