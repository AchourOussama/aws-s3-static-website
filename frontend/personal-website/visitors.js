document.addEventListener('DOMContentLoaded', function() {
  console.log("from script")

  // POST method to increment the visitor count
  const api_url = 'https://39rt8t5e70.execute-api.us-east-1.amazonaws.com/prod/visits'
  var xhr = new XMLHttpRequest();
  xhr.open('POST', api_url);
  xhr.send();

  // GET method to retrieve the current visitor count and display it on the webpage
  async function getCurrentCount() {
    const response = await fetch(api_url );
    const data = await response.json();
    console.log(data);
    const count = data["count is"];
    var countElement = document.getElementById('count');
    //countElement.innerText = count;
    countElement.innerText =`${count}`;
    //countElement.innerText =`Count: 100`;
  }

  getCurrentCount();
});