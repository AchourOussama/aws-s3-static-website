document.addEventListener('DOMContentLoaded', function() {
    console.log("hello before function ") ; 
    // POST method to increment the visitor count
    // var xhr = new XMLHttpRequest();
    // xhr.open('POST', 'https://yk56eavo5f.execute-api.us-east-1.amazonaws.com/prod/count');
    // xhr.send();
  
    // GET method to retrieve the current visitor count and display it on the webpage
    async function getCurrentCount() {
    //   const response = await fetch('https://yk56eavo5f.execute-api.us-east-1.amazonaws.com/prod/count');
    //   const data = await response.json();
    //   const count = data.count;
    
    // testing 
      const count = 100; 
      const countElement = document.getElementById('count');
      countElement.innerText = "count";
      const greeting = document.getElementById('hello');
      greeting.innerText = "hello world";
      
    }
  
    getCurrentCount();
  });