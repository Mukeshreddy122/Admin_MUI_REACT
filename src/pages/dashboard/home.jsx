import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import {
  ClockIcon,
  CheckIcon,
  EllipsisVerticalIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import { StatisticsCard } from "@/widgets/cards";
import { StatisticsChart } from "@/widgets/charts";
import {
  statisticsCardsData,
  statisticsChartsData,
  projectsTableData,
  ordersOverviewData,
} from "@/data";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export function Home() {
  
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDdBrKWRFgNwFaW1fzFkM0D4IIdjRAModk",
  });
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div className="mt-12">
      <div className="mb-12 grid  gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        {statisticsCardsData.map(({ icon, title, footer, ...rest }) => (
          <StatisticsCard
            key={title}
            {...rest}
            title={title}
            icon={React.createElement(icon, {
              className: "w-6 h-6 text-white",
            })}
            footer={
              <Typography className="font-normal text-blue-gray-600">
                <strong className={footer.color}>{footer.value}</strong>
                &nbsp;{footer.label}
              </Typography>
            }
          />
        ))}
      </div>
        <div>
        <Map />
        </div>
      
    </div>
  );
}
function Map() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  return (
    <GoogleMap zoom={10} center={center}  mapContainerStyle={{ width: '100%', height: '60vh' }}>
      <Marker position={center} />
    </GoogleMap>
  );
}

export default Home;
