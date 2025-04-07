import React, {useState} from 'react'
import axios from "axios"

export default function ProjectPage() {

    const [data, setdata] = useState("")

    const saveValue = async (e)=>{
        e.preventDefault();
        setdata(data);
        const res = await axios.post("http://127.0.0.1:5000/activity", {
            data : data
        })

        console.log(res)
    }

  return (
    <div>
        <form>
            <input value={data}   onChange={(e) => setdata(e.target.value)}  type="text" />
            <button onClick={saveValue}>Send</button>
        </form>
    </div>
  )
}

