//Making a POST Request

const myURL = 'https://jsonplaceholder.typicode.com/posts'; //Specify the API endpoint

//Form data to be sent in the request body
const formData = {
    title: "Onesmus Mutyauvyu",
    body: "Random post just for testing!",
    userID: 120
};


//Make a POST request using fetch API
fetch(myURL,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
})
.then(response=>{
    if(!response.ok){
        throw new Error("Response not OK!");
    }else{
        return response.json();
    }
})
.then(newUser => {
    console.log("User Data: ", newUser) //Log newly created user to the console
})
.catch(error => {
    console.log("Error ", error)
})