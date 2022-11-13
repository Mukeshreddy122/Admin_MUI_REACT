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
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { authorsTableData, projectsTableData } from "@/data";
import { Input } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";

export function Addstudent() {
  return (
    <div>
      <form >
        <div className="mb-4 flex flex-row gap-10">
          <div className="w-full">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              for="name"
            >
              School Name
            </label>
            <Input variant="outlined" label="School" />
          </div>

          <div className="w-full">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              for="virtual"
            >
              Virutual url
            </label>
            <Input variant="outlined" label=" URl" />
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
            <Input variant="outlined" label="longitude" />
          </div>

          <div className="w-full">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              for="lattitude"
            >
              lattitude
            </label>
            <Input variant="outlined" label="lattitude" />
          </div>
        </div>
        <div className="mb-4 flex flex-row gap-10">
          <div className="w-full">
            <label
              className="mb-2 block text-sm font-bold text-gray-700 "
              for="longitude"
            >
              Email
            </label>
            <Input variant="outlined" label="Email" />
          </div>

          <div className="w-full">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              for="lattitude"
            >
              Founder
            </label>
            <Input variant="outlined" label="Founder" />
          </div>
        </div>
        <div className="mb-6">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            for="password"
          >
            Location
          </label>
          <Input variant="outlined" label="school address" />
        </div>
        <div className="mb-6">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            for="password"
          >
            Description
          </label>
          <Textarea color="blue" label="Description" />
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
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
            type="button"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Addstudent;
