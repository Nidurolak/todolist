import React from "react";
import { useLocation, useNavigate } from "react-router-dom";


const Work = () =>{
    const navigate = useNavigate()
    const location = useLocation()
    console.log('zzzzzzzzzzzzzzzzz')
    return (<>
      <div>{`현재 페이지 : ${location.pathname.slice(1)}`}</div>
        <button
          onClick={() => {
            navigate("/test");
          }}
        >
          test로 이동
        </button>
    </>
      );
}

export default Work