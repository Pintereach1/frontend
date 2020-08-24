import React, { useState , useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';


function MyList() {
  const [list, setList] = useState([]);

  useEffect(() => {
      axiosWithAuth()
        .get("/api/authusers/articles")
        .then (res => setList(res.data))
        .catch(error => console.error(error));    
    }, [list]);

    return (
        <div>
            
        </div>
    )
}

export default MyList;