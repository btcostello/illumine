import React, {useState, useEffect} from 'react';
import { SliderField } from '@aws-amplify/ui-react'
import IntegerInput from '../components/integerinput';

const DesignTest = () => {

  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setScrollTop(window.scrollY);
      }, 50); // Debounce time in milliseconds (adjust as needed)
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);



    ///NUMBER WITH COMMA///
    const [num,setNum] = useState('50')
    const formatNumber = (value) => {
        // Remove existing commas
        value = value.replace(/,/g, '');
    
        // Add commas as appropriate
        const parts = value.split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return parts.join('.');
      };
      const handleChange = (event) => {
        let { value } = event.target;
        value = value.replace(/[^0-9.]/g, ''); // Remove non-numeric characters
    
        // Ensure only one decimal point
        const decimalCount = value.split('.').length - 1;
        if (decimalCount > 1) {
          value = value.replace(/\.+$/, '');
        }
    
        setNum(formatNumber(value));
      };

      ///PERCENTAGE///
      const [num2,setNum2] = useState('25%')
      const formatPct = (value) => {
        // Remove existing commas and percent symbol
        value = value.replace(/,|%|/g, '');
    
        // Add commas as appropriate
        const parts = value.split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    
        return parts.join('.') + '%';
      };
      const handleChange2 = (event) => {
        let { value } = event.target;
        value = value.replace(/[^0-9.]/g, ''); // Remove non-numeric characters
    
        // Ensure only one decimal point
        const decimalCount = value.split('.').length - 1;
        if (decimalCount > 1) {
          value = value.replace(/\.+$/, '');
        }
    
        setNum2(formatPct(value));
      };

      ///INTEGER///
      const [num3, setNum3] = useState('50');

      const handleChange3 = (event) => {
        let { value } = event.target;
        value = value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
        setNum3(value);
      };






    return (
      <div>
        <div className="right-div" style={{ bottom: "000px" ,color:"red", position:"fixed"}}>
        <SliderField label="Slider1" max={100} isValueHidden/>
        <SliderField label="Slider2" max={100} isValueHidden/>
        <SliderField label="Slider3" max={100} isValueHidden/>
        <SliderField label="Slider4" max={100} isValueHidden/>

        </div>
        <h2 style={{fontFamily:"noto serif"}}>Input Group 1</h2>
        <div style={{ display:"inline-block"}}>
        <p style={{fontSize:"1.5rem", fontFamily:"Noto serif", marginBottom:"0px",marginLeft:"20px"}}><strong>Insured</strong></p>
        <div style={{padding:"10px", margin:"20px", marginTop:"0px", borderRadius: "5px", boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.2)", display:"inline-block"}}>
        <p>Numeric Input</p>
        <input
          type="text"
          value={num}
          onChange={handleChange}
        />

        <p style={{fontFamily:"noto serif"}}>Percentage Input</p>
        <input
          type="text"
          value={num2}
          onChange={handleChange2}
        />

        <p>Integer Input</p>
        <input
          type="text"
          value={num3}
          onChange={handleChange3}
        />
       </div>
       </div>


       <p style={{fontSize:"1.5rem", fontFamily:"Noto serif", marginBottom:"0px",marginLeft:"20px"}}><strong>Product</strong></p>

        <div style={{padding:"10px", margin:"20px",borderRadius: "5px", boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.2)", display:"inline-block"}}>
        <p>Numeric Input</p>
        <input
          type="text"
          value={num}
          onChange={handleChange}
        />

        <p style={{fontFamily:"noto serif"}}>Percentage Input</p>
        <input
          type="text"
          value={num2}
          onChange={handleChange2}
        />

        <p>Integer Input</p>
        <input
          type="text"
          value={num3}
          onChange={handleChange3}
        />
       </div>
       <h2 >Input Group 2</h2>
       <div style={{padding:"10px", margin:"20px",borderRadius: "5px", boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.2)"}}>
        <p>Numeric Input</p>
        <input
          type="text"
          value={num}
          onChange={handleChange}
        />
        </div>

        <div style={{padding:"10px", margin:"20px",borderRadius: "5px", boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.2)"}}>
        <p style={{fontFamily:"noto serif"}}>Percentage Input</p>
        <input
          type="text"
          value={num2}
          onChange={handleChange2}
        />
        </div>
        
        <div style={{padding:"10px", margin:"20px",borderRadius: "5px", boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.2)"}}>
        <p>Integer Input</p>
        <input
          type="text"
          value={num3}
          onChange={handleChange3}
        />
       </div>
       <div>
    </div>
       <div style={{height:"2000px"}}></div>
      </div>
    );
  };
    
export default DesignTest