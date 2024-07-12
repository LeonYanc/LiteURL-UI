import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  HomeIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";
import { LinkIcon } from "@heroicons/react/16/solid";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
 
export default function Sidebar() {
  return (
    <Card className="h-screen w-full max-w-[16rem] p-4 mt-1 shadow-xl shadow-blue-gray-900/5 float-left bg-orange-50">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          <img src={logo} alt="logo" className="h-7 w-7 float-left" />
          LiteURL
        </Typography>
      </div>
      <List>
        <Link to="/">
        <ListItem>
          <ListItemPrefix className="float-left">
            <HomeIcon className="h-5 w-5" />
          </ListItemPrefix>
          Home
        </ListItem>
        </Link>
        <Link to="/links">
        <ListItem>
          <ListItemPrefix>
            <LinkIcon className="h-5 w-5" />
          </ListItemPrefix>
          Links
        </ListItem>
        </Link>
        <Link to="/analytics">
        <ListItem>
          <ListItemPrefix>
            <ChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          Analytics
        </ListItem>
        </Link>
      </List>
    </Card>
  );
}