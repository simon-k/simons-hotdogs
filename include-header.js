// Dynamically load header.html and insert it into the page
fetch('header.html')
  .then(response => response.text())
  .then(data => {
    const temp = document.createElement('div');
    temp.innerHTML = data;
    const header = temp.querySelector('header');
    if (header) {
      document.body.insertBefore(header, document.body.firstChild);
    }
  });
