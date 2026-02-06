// Sultan 47 Particle Engine (Microsecond Logic)
function triggerAnimation(moveType) {
  const startX = 40; // Hero position
  const targetX = 120; // Opponent position
  
  if(moveType === 'Flameburst') {
    // Red particle burst logic
    drawParticle(startX, targetX, '#FF4500'); 
  }
}

function drawParticle(x, targetX, color) {
  // Simple micro-increment until collision
  let currentX = x;
  const interval = setInterval(() => {
    ctx.fillStyle = color;
    ctx.fillRect(currentX, 72, 2, 2); // 2x2 pixel particle
    currentX += 4;
    if(currentX >= targetX) {
      clearInterval(interval);
      // Collision fade out happens here
    }
  }, 16); // 60fps micro-burst
}
