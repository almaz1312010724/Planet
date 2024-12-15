const textElement = document.getElementById('disco');
textElement.addEventListener('mouseover', function() {
  textElement.style.color = 'blueviolet'; 
});
textElement.addEventListener('mouseout', function() {
  textElement.style.color = ''; 
});