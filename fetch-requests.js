/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

/* ============================== Phase 1 ============================== */

// Your code here 
fetch('/products', {
  method:"POST",
  body:"name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
});


/* ============================== Phase 2 ============================== */

// Your code here 
fetch('/products', {
  method: 'POST',
  body: 'name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
.then(response => {
  console.log('Response status:', response.status); 
  console.log('Response Content-Type:', response.headers.get('Content-Type')); 
  console.log('Response URL:', response.url);// it's already redirectied URL

  // check if response was redirected
  console.log('Redicrected:',response.redirected);
  return response;
})
// .then(res => {
//   //if redirected, check the redirected URL
//   if(res.redirected){
//     console.log('Redictied status',res.status)
//     console.log('Redirectied URL:', res.url);// URL after redirection
//   }
// })


/* ============================== Phase 3 ============================== */

// Your code here 


fetch('/products', {
  method:"POST",
  body: new URLSearchParams({
    name: "Caribbean Delight Coffee",
    description: "Made by Manatee Coffee",
    price: 11.99,
    categories: "grocery"
  }),
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
})
.then(response => {
  console.log('Response status:', response.status); 
  console.log('Response Content-Type:', response.headers.get('Content-Type')); 
  console.log('Response URL:', response.url);// it's already redirectied URL

  // check if response was redirected
  console.log('Redicrected:',response.redirected);
  return response;
})
