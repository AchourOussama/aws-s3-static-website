// document.addEventListener('DOMContentLoaded', function() {
//     console.log("hello before function ") ; 
//     const apiUrl = 'https://3a04q82le8.execute-api.us-east-1.amazonaws.com/prod/visits'
//     // POST method to increment the visitor count
    
//     // GET method to retrieve the current visitor count and display it on the webpage
//     async function getCurrentCount() {
 
//     // testing 
//       const count = 100; 
//       const countElement = document.getElementById('count');
//       countElement.innerText = "count";
//       const greeting = document.getElementById('hello');
//       greeting.innerText = "hello world";
      
//     }
  
//     getCurrentCount();
//   });

  // document.addEventListener('DOMContentLoaded', function() {
  //   console.log("hello before function ") ; 
  //   const apiUrl = 'https://3a04q82le8.execute-api.us-east-1.amazonaws.com/prod/visits'
  //   // Example POST request
  //   fetch(`${apiUrl}`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       // Add any additional headers if required
  //     },
  //     // Add the request body for POST requests
  //     body: JSON.stringify({}),
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log('Response from API:', data);
  //       // Process the data returned by the API
  //       // You might want to display the count on your webpage
  //       const countElement = document.getElementById('count');
  //       countElement.innerText = `Count: ${data.count}`;
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //       // Handle errors
  //     });
  // });


  document.addEventListener('DOMContentLoaded', function() {
    console.log("from script")
   
    // POST method to increment the visitor count
    const apiUrl = 'https://sfanvsifba.execute-api.us-east-1.amazonaws.com/prod/visits'
    var xhr = new XMLHttpRequest();
    xhr.open('POST', apiUrl);
    xhr.send();
  
    // GET method to retrieve the current visitor count and display it on the webpage
    async function getCurrentCount() {
      const response = await fetch(apiUrl );
      const data = await response.json();
      console.log(data);
      const count = data["count is"];
      var countElement = document.getElementById('count');
      //countElement.innerText = count;
      countElement.innerText =`Count: ${count}`;
    }
  
    getCurrentCount();
  });