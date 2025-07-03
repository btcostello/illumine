import { useState } from 'react';

export function PremYrs() {
  const [premYr, setPremYr] = useState('10');
  return (
    <>
        <label>Prem Years</label><br></br>
        <input name="premYr" value={premYr} 
          onChange={(e) => setPremYr(e.target.value)} />
    </>
  );
}
 
export function PremAmt() {
    const [premAmt, setPremAmt] = useState('10000');

    return (
      <div>
          <label>Annual Premium</label><br></br>
          <input name="premAmt" value={premAmt} 
            onChange={(e) => setPremAmt(e.target.value)} />
      </div>
    );
  }

  export function FaceAmt() {
    const [faceAmt, setFaceAmt] = useState('1000000');
    return (
      <>
          <label>Face Amount</label><br></br>
          <input name="faceAmt" value={faceAmt} 
            onChange={(e) => setFaceAmt(e.target.value)} />
      </>
    );
  }
  
