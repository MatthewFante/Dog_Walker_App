
// Create a test URLSearchParams object 
var searchParams = new URLSearchParams(window.location.search); 

// // Display the key/value pairs 
for(var value of searchParams.values()) { 
  console.log(value); 
}