const circle = document.querySelector(".moon");
const center=document.querySelector(".center");
const line=document.querySelector(".circle");



// Center of the circular path
const centerX = 1100;
const centerY = 0;

center.style.transform=`translate(${centerX}px,${centerY}px)`
line.style.transform=`translate(${centerX}px,${centerY}px)`

// Radius of the circle
const radius = 300;

// Angle variable (initial angle in radians)
let angle = 0;
let initialpos=0;
// Animation function
function animate() {
  // Calculate the new X and Y coordinates of the element
  const x = centerX + radius * Math.cos(angle);
  const y = centerY + radius * Math.sin(angle);
    if(initialpos==0) {initialpos=x;};
  // Use translate to update the element's position
  circle.style.transform = `translate(${x-100}px, ${y}px)`;
 
  // Increment the angle to create motion (adjust the speed with a smaller value)
  angle += 0.009;

  // Request the next animation frame
  requestAnimationFrame(animate);
}

// Start the animation
animate();
