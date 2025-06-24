// Mouse trail animation
class CursorTrail {
  constructor() {
    this.particles = [];
    this.mouse = { x: 0, y: 0 };
    this.canvas = null;
    this.ctx = null;
    this.animationId = null;
    this.init();
  }

  init() {
    this.createCanvas();
    this.bindEvents();
    this.animate();
  }

  createCanvas() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    
    this.canvas.style.position = 'fixed';
    this.canvas.style.top = '0';
    this.canvas.style.left = '0';
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this.canvas.style.pointerEvents = 'none';
    this.canvas.style.zIndex = '9999';
    
    this.resize();
    document.body.appendChild(this.canvas);
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  bindEvents() {
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
      this.addParticle();
    });

    window.addEventListener('resize', () => {
      this.resize();
    });
  }

  addParticle() {
    const particle = {
      x: this.mouse.x,
      y: this.mouse.y,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      life: 1,
      decay: 0.02,
      size: Math.random() * 3 + 1,
      color: `hsl(${Math.random() * 60 + 200}, 70%, 60%)`
    };
    
    this.particles.push(particle);
    
    // Limit particles
    if (this.particles.length > 50) {
      this.particles.shift();
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const particle = this.particles[i];
      
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.life -= particle.decay;
      
      if (particle.life <= 0) {
        this.particles.splice(i, 1);
        continue;
      }
      
      this.ctx.save();
      this.ctx.globalAlpha = particle.life;
      this.ctx.fillStyle = particle.color;
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();
    }
    
    this.animationId = requestAnimationFrame(() => this.animate());
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.canvas && this.canvas.parentNode) {
      this.canvas.parentNode.removeChild(this.canvas);
    }
  }
}

// Initialize cursor trail when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.cursorTrail = new CursorTrail();
});

export default CursorTrail; 