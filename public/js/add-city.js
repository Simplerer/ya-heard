async function newFormHandler(event) {
    event.preventDefault();
    const location_name = document.querySelector('#location_name').value;
    // fetch request to add a new location THIS SHOULD WORK WHEN LOCATION HANDLEBARS AND ROUTES ARE PULLED
    const response = await fetch(`/location`, {
      method: 'POST',
      body: JSON.stringify({
        location_name,
      }),
      
    });
    //if the location is added, the enter review template will be rerendered
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add city');
    }
  }
  
  document.querySelector('.new-city-form').addEventListener('submit', newFormHandler);
  