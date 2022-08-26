// Add your code here
function submitData (name, email ) {

  return fetch( "http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify( {
        name : "Steve",
        email : "steve@steve.com",
      } )
    } )
    .then (function (response) {
      return response.json()
    } )
    .then (function (object) {
      document.body.innerHTML = object.id
    } )
    .catch (function (error) {
      alert ("Unauthorized Access")
      document.body.innerHTML = error.message
    } )
} 







/*
const formData = {
    dogName: "Byron",
    dogBreed: "Poodle",
  };
  
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };
  
  fetch("http://localhost:3000/dogs", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      console.log(object);
    });
  
  */
