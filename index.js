document.addEventListener('scroll', function() {
  const contents = document.querySelectorAll('.content'); // Select all .content elements
  const viewportHeight = window.innerHeight;

  contents.forEach(content => {
    const contentRect = content.getBoundingClientRect();

    // Calculate the vertical center of the viewport
    const centerY = viewportHeight / 2;

    // Calculate the center of the content element
    const contentCenterY = contentRect.top + contentRect.height / 2;

    // Calculate the distance from the viewport center to the content center
    const distanceFromCenter = Math.abs(centerY - contentCenterY);

    // Maximum distance where content is still fully visible
    const maxDistance = viewportHeight / 2;

    // Calculate opacity
    const opacity = Math.max(0, 1 - distanceFromCenter / maxDistance);

    // Apply calculated opacity to each content element
    content.style.opacity = opacity;
  });
});
