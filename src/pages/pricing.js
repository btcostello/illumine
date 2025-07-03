import React from 'react';
  
const Pricing = () => {
  return (
    <div
      style={{
        justifyContent: 'Left',
        alignItems: 'Left',
        height: '100vh',
      }}
    >
      <h1>Find the right plan for you</h1>

      <table className="PriceTable">
        <caption>Illumine Probability Calculator Plans</caption>
        <tr>
          <td></td>
          <th scope="col">Fiduciary</th>
          <th scope="col">Policy Service</th>
          <th scope="col">Design</th>
        </tr>
        <tr>
          <th scope="row">Price</th>
          <td>Free</td>
          <td>$20 / month</td>
          <td>$50 / month</td>
        </tr>
        <tr>
          <th scope="row">Indexed</th>
          <td>Yes</td>
          <td>Yes</td>
          <td>Yes</td>
        </tr>
        <tr>
          <th scope="row">Variable</th>
          <td>No</td>
          <td>Yes</td>
          <td>Yes</td>
        </tr>
        <tr>
          <th scope="row">Index Customization</th>
          <td>No</td>
          <td>Yes</td>
          <td>Yes</td>
        </tr>
        <tr>
          <th scope="row">Distributions</th>
          <td>No</td>
          <td>No</td>
          <td>Yes</td>
        </tr>
        <tr>
          <th scope="row">No Lapse Guarantee</th>
          <td>No</td>
          <td>Yes</td>
          <td>Yes</td>
        </tr>
        <tr>
          <th scope="row">Daily Report Limit</th>
          <td>10</td>
          <td>25</td>
          <td>Unlimited</td>
        </tr>
        <tr>
          <th scope="row">Free Calculations</th>
          <td>25</td>
          <td>25</td>
          <td>25</td>
        </tr>
      </table>
      
      <p>Also consider our full-service consulting services, available on contingency. For more information about consulting services...</p>
    </div>
  );
};
  
export default Pricing;