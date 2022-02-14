// Apply category filter input when name = network changes
document.querySelector('#networks').addEventListener('change', function (e) {
  console.log(e.target.value);
  const url = `/?network_id=${e.target.value}`;
  // load the page so that the controller can update the view
  document.location = url;
});

// check for network_id, assumes network_id is the only possible parameter.
// This won't work if you need to support multiple parameters.
if (document.location.search) {
  const network_id = document.location.search.split('=')[1];

  // if the user has selected a network, update the corresponding radio element for it
  const networkRadios = document.querySelectorAll('[name="network"]');
  for (const element of networkRadios) {
    if (element.value == network_id) {
      element.checked = true;
      break;
    }
  }
}

// clear radios and show all projects when reset is clicked
document.querySelector('#reset-categories').addEventListener('click', () => {
  document.location = '/';
});
