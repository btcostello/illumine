import React from 'react';
import { useState } from 'react';
import { Button } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { API } from 'aws-amplify';


export const Prob = () => {

    const [apiData, setApiData] = React.useState(60);
    const [seed1, setSeed1] = useState(10);
    const [seed2, setSeed2] = useState(20);
    const [seed3, setSeed3] = useState(30);


    const handleClick = async () => {
      const data = await API.get("AmplifyTest04", "/customers/5", {
        queryStringParameters: {
            "f1": seed1,
            "f2": seed2,
            "f3": seed3,
        },
      });
      setApiData(data.probability);
    };




    return (
        <>
    <div className="f">
     <div className="probButtonContainer">
     <Button onClick={handleClick}>Calculate Probability</Button>

     </div>
     <div>
     <input name="seed1" value={seed1} onChange={(e) => setSeed1(e.target.value)}/><br></br>
     <input name="seed2" value={seed2} onChange={(e) => setSeed2(e.target.value)}/><br></br>
     <input name="seed3" value={seed3} onChange={(e) => setSeed3(e.target.value)}/>
     </div>
     <p>The probability is {apiData}%  -- </p> 
     <div></div>
     
      
     </div>
     </>
     
    )
}