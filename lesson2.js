//Making a GET Request

const myURL = 'https://jsonplaceholder.typicode.com/posts/1';

fetch(myURL) //Define the API endpoint
.then(response => {
    if(!response.ok){ //Check if the response is okay
        throw new Error('Response not OK!');
    }else{
        return response.json(); //If the response is okay, convert it to json
    }
})
.then(userData=>{
        console.log("User Data: ", userData) //Log the user data to the console
    }
)
.catch(
    error=>{
        console.log("Error: "+ error) //Handle errors
    }
)