import React from "react";
import { Typography } from "@material-tailwind/react";
 
export default function Home() {
    return (
        <div className="p-5 mt-1 shadow-xl shadow-blue-gray-900/5">
        <h1>Home</h1>
        <Typography>
            LiteURL is a URL shortening service that allows users to shorten URLs.
        </Typography>
        </div>
      );
}