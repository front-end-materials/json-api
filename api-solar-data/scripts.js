"use strict";

let jsonData;

fetch("https://services.swpc.noaa.gov/products/geospace/planetary-k-index-dst.json")
  .then(function (response) {
    // checks if received okay:
    console.log(`response: ${response.status}`);
    return response.json();
  })
  .then(function(data) {
    // assigns the data to a variable
    console.log(data);
    jsonData = data;
  })

const showDataFunction = () => {
  showData.innerHTML = 
    `<strong>Time:</strong> ${jsonData[1][0]}<br>
    <strong>K index:</strong> ${jsonData[1][1]}<br>
    <strong>distance of solar wind:</strong> ${jsonData[1][2]}`;
  showData.style.opacity = "1";
}

getData.addEventListener("click", showDataFunction);

// single data extract for testing: 
// let jsonData = [
// ["time_tag", "planetary_k_index", "dst"],
//   [
//     "2020-02-10 00:00:00",
//     "2.67",
//     "-10.9980001"
//   ]
// ];
