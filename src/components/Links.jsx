import { useEffect, useState } from "react";
import { Card, Typography, Input, Button, Spinner } from "@material-tailwind/react";
import axios from 'axios'
 
export default function Home() {

    const [link, setLink] = useState("");
    const onChange = ({ target }) => setLink(target.value);

    const TABLE_HEAD = ["Original Links", "LiteURL", "Created Date", ""];

    const[data,setData] = useState([])
    const[loading,setLoading] = useState(true)

    const fetchDataFromAPI = () => {
        try{    
          axios.get(`https://api.spacexdata.com/v4/launches`)
          .then(response => {
              if (response !== undefined){
                  console.log(`mission details : ${JSON.stringify(response.data)}`)
                  setData(response.data)
                  props.setBooks(response.data)
                  setLoading(false)
              }else{
                  console.log("No data received in response");
                  setLoading(false)
              }
          })
          .catch(err => {
              console.log(`Cannot connect to API due to error : ${err}`);
              setLoading(false)
          }) 
          }
          catch(error){
              console.log(`Error while fetching data from API: ${error}`);
              setLoading(false)
          }
    }

     useEffect( () => {
        console.log(`fetch data from API`);
        fetchDataFromAPI()}, []);

    return (
    <div className="p-5 mt-1 shadow-xl shadow-blue-gray-900/5">
     <h1>Create New URL</h1>
     <div className="relative flex mx-auto max-w-[25rem]">
      <Input
        label="New URL"
        onChange={onChange}
        className="pr-20"
        containerProps={{
          className: "min-w-0",
        }}
      />
      <Button
        variant="text"
        size="sm"
        color={link ? "gray" : "blue-gray"}
        disabled={!link}
        className="!absolute right-1 top-1 rounded"
      >
        Create
      </Button>
     </div>
        <br />
        <h1>Created Links</h1>

        {loading ? (
        <Spinner>
            <span>loading...</span>
        </Spinner>
      ) : (
    <Card className="relative flex h-full">
      <table className="w-full table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, name, date_utc }, index) => (
            <tr key={id} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {id}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {name}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {date_utc}
                </Typography>
              </td>
              <td className="p-4">
                <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                  Edit
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
    )}
    </div>
    );
}