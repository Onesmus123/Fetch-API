//Handling Query Parameters when making a GET reques.

const apiURL = 'https://jsonplaceholder.typicode.com/posts'; //API Endpoint for fetching posts

// Setting up query parameters
const queryParams = {
    userId:3
};

//Convert the query parameters to a string
const queryString = new URLSearchParams(queryParams).toString();

//Combine the API Endpoint and query parameters
const fullURL = `${apiURL}?${queryString}`;

fetch(fullURL)
.then(response => {
    if(!response.ok){
        throw new Error ("Response was not OK!");
    }
        return response.json();
})
.then(userData => {
    console.log("User Data", userData);
})
.catch(error => {
    console.log("Error: ", error);
}
)