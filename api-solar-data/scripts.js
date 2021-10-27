"use strict";

let jsonData, dataLength, dateTime;

fetch("https://services.swpc.noaa.gov/products/noaa-planetary-k-index.json")
  .then(function (response) {
    // if data is received okay, this will be '200':
    console.log(`response: ${response.status}`);
    return response.json();
  })
  .then(function(data) {
    // displays the data structure in the console:
    console.log(data);
    // assigns the data to a variable:
    jsonData = data;
  })
  
const showDataFunction = () => {
  // stores a reference to most recent data at the end of array:
  dataLength = jsonData.length-1;

  // removes milliseconds from the time:
  dateTime = jsonData[dataLength][0].substring(0, 19);

  // displays data in HTML page:
  showData.innerHTML = 
   `<strong>Date/time:</strong> ${dateTime}<br>
    <strong>Disturbance (K index):</strong> ${jsonData[dataLength][2]}`;
  showData.style.opacity = "1";
}

getData.addEventListener("click", showDataFunction);

// single data extract from old testing data: 
// let jsonData = [
// ["time_tag", "planetary_k_index", "dst"],
//   [
//     "2020-02-10 00:00:00",
//     "2.67",
//     "-10.9980001"
//   ]
// ];
