import {
  BanknotesIcon,
  UserPlusIcon,
  UserIcon,
  ChartBarIcon,
  
} from "@heroicons/react/24/solid";
import SchoolIcon from '@mui/icons-material/School';
export const statisticsCardsData = [
  {
    color: "blue",
    icon:   SchoolIcon ,
    title: "Schools",
    value: "100",
    footer: {
      color: "text-green-500",
      
    },
  },
  {
    color: "pink",
    icon: SchoolIcon,
    title: "Private schools",
    value: "50",
    footer: {
      color: "text-green-500",
      
    },
  },
  {
    color: "green",
    icon: SchoolIcon,
    title: "Public Schools",
    value: "50",
    footer: {
      color: "text-red-500",
   
    },
  },
  
];

export default statisticsCardsData;
