import React from "react";
import { Link, useNavigate } from "react-router-dom";
import App from "../App";

const Test = () =>{
    const navigate = useNavigate()
    console.log('zzzzzzzzzzzzzzzzz')
    return (<>
        <button
          onClick={() => {
            navigate("/work");
          }}
        >
          works로 이동
        </button>
        <Link to='/work'>works로 이동</Link>
    </>
      );
}

export default Test