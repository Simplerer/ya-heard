async function newFormHandler(event) {
  event.preventDefault();
  const title = document.querySelector('#title').value;
  const comment = document.querySelector('#comment').value;

  // dropdown menu for category incomplete
  const cat = document.querySelector('#cat:checked') ? true : false;
  // Send fetch request to add a new review
  const response = await fetch(`/recommendation`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      comment,

      cat,

    }),

  });
  //if the recommendation is added
  if (response.ok) {
    document.location.replace('/recommendation');
  } else {
    alert('Failed to add recommendation');
  }
}

document.querySelector('.new-recommendation-form').addEventListener('submit', newFormHandler);
 