async function newFormHandler(event) {
  event.preventDefault();
  const title = document.querySelector('#title').value;
  const comment = document.querySelector('#comment').value;
  const address = document.querySelector('#address').value;
  const website = document.querySelector('#website').value;
  const category_id = document.querySelector('#category_id').value;
 
  
  // fetch request to add a new location THIS SHOULD WORK WHEN LOCATION HANDLEBARS AND ROUTES ARE PULLED
  const response = await fetch(`/api/locations`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      comment,
      address,
      website,
      category_id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    
  });
  //if the location is added, the enter review template will be rerendered
  if (response.ok) {
    console.log(body);
    document.location.replace('/location');
  } else {
    alert('Failed to add city');
  }
}


document.querySelector('.new-city-form').addEventListener('submit', newFormHandler);
