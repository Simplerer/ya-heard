async function newFormHandler(event) {
  event.preventDefault();
  const title = document.querySelector('#title').value;
  const comment = document.querySelector('#comment').value;
  const category_id = document.querySelector('#category_id').value;
  const address = document.querySelector('#address').value;
  const website = document.querySelector('#website').value;
  const location_id = document.querySelector('#location_id').value;


  // Send fetch request to add a new review

  const response = await fetch(`/api/recommendations`, {
    method: 'POST',
    body: JSON.stringify({
      title: title,
      comment: comment,
      website: website,
      address: address,
      category_id: category_id,
      location_id: location_id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },

  });
  //if the recommendation is added
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to add recommendation');
  }
}

document.querySelector('.new-recommendation-form').addEventListener('submit', newFormHandler);