
  import AdminIcon from '@rsuite/icons/Admin';
  import TableIcon from '@rsuite/icons/Table';

  import {  Tables,Private,Public } from "@/pages/dashboard";
  import { SignIn, SignUp } from "@/pages/auth";
  
  const icon = {
    className: "w-5 h-5 text-inherit",
  };
  
  
  export const tab=[
    {
      title: "Tables",
      layout: "dashboard",
      icon: <TableIcon {...icon} />,

      pages: [
        {
          name: "all tables",
          path: "/tables",
          element: <Tables />,
         
        },
        {
          name: "private",
          path: "/Private",
          element: <Private />,
         
        },{
          name: "public",
          path: "/Public",
          element: <Public />,
         
        },
      ],
    },
    {
      title: "Authentication",
      layout: "auth",
      icon: <AdminIcon {...icon} />,

      pages: [
        
        {
          name: "sign in",
          path: "/sign-in",
          element: <SignIn />,
        },
        {
          name: "sign up",
          path: "/sign-up",
          element: <SignUp />,
        },
      
      ],
    },
    
      
      
  ];

export default tab; 
