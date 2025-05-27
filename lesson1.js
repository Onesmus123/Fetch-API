//Understanding the basic Fetch API syntax.
//Here, we are fetching data from the 'https://jsonplaceholder.typicode.com/posts/1'.

fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response=>response.json()) //Handles the response and converts it to JSON format.
.then(data=>console.log(data)) //Logs the retrieved data to the console.
.catch(error=>console.log("Error: "+ error)) //Handles the errors incase the request fails.