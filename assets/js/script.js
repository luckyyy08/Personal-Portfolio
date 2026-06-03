document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 800,
        once: true,
        offset: 100,
    });

    // Typed.js initialization (only on home page if element exists)
    const typedElement = document.querySelector('.typed-text');
    if (typedElement) {
        new Typed('.typed-text', {
            strings: ['Web Developer', 'Full Stack Developer', 'Freelancer', 'Problem Solver'],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true
        });
    }

    // Theme Toggle Logic
    const themeToggleBtn = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;
    const icon = themeToggleBtn.querySelector('i');

    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    const activeTheme = savedTheme || systemTheme;
    
    htmlElement.setAttribute('data-bs-theme', activeTheme);
    updateIcon(activeTheme);

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlElement.setAttribute('data-bs-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme);
    });

    function updateIcon(theme) {
        if (theme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Counter Animation
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    const animateCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
            };
            
            // Intersection Observer to start counting when visible
            const observer = new IntersectionObserver((entries) => {
                if(entries[0].isIntersecting) {
                    updateCount();
                    observer.disconnect();
                }
            });
            observer.observe(counter);
        });
    };
    
    if (counters.length > 0) {
        animateCounters();
    }

    // ==========================================================================
    // Interactive Canvas Particles Background
    // ==========================================================================
    const canvas = document.getElementById('particleCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particlesArray = [];
        let mouse = {
            x: null,
            y: null,
            radius: 120
        };

        // Resize Canvas
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Track Mouse Movement
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        window.addEventListener('mouseleave', () => {
            mouse.x = null;
            mouse.y = null;
        });

        // Particle Blueprint
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2.5 + 1;
                this.speedX = Math.random() * 0.6 - 0.3;
                this.speedY = Math.random() * 0.6 - 0.3;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Wall Collision / Loop
                if (this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX;
                if (this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY;

                // Mouse interaction repulsion/influence
                if (mouse.x !== null && mouse.y !== null) {
                    let dx = this.x - mouse.x;
                    let dy = this.y - mouse.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouse.radius) {
                        let force = (mouse.radius - distance) / mouse.radius;
                        let directionX = dx / distance;
                        let directionY = dy / distance;
                        this.x += directionX * force * 1.5;
                        this.y += directionY * force * 1.5;
                    }
                }
            }

            draw() {
                // Glow indicator under dark mode
                const theme = document.documentElement.getAttribute('data-bs-theme');
                ctx.fillStyle = theme === 'dark' ? 'rgba(99, 102, 241, 0.45)' : 'rgba(99, 102, 241, 0.25)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Initialize particles
        const initParticles = () => {
            particlesArray = [];
            const numberOfParticles = Math.min(80, Math.floor((canvas.width * canvas.height) / 18000));
            for (let i = 0; i < numberOfParticles; i++) {
                particlesArray.push(new Particle());
            }
        };
        initParticles();

        // Connect Lines
        const connectParticles = () => {
            const theme = document.documentElement.getAttribute('data-bs-theme');
            const maxDistance = 110;
            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a + 1; b < particlesArray.length; b++) {
                    let dx = particlesArray[a].x - particlesArray[b].x;
                    let dy = particlesArray[a].y - particlesArray[b].y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        let opacity = 1 - (distance / maxDistance);
                        ctx.strokeStyle = theme === 'dark' 
                            ? `rgba(139, 92, 246, ${opacity * 0.12})` 
                            : `rgba(99, 102, 241, ${opacity * 0.08})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                        ctx.stroke();
                    }
                }

                // Connect to mouse coordinates
                if (mouse.x !== null && mouse.y !== null) {
                    let dx = particlesArray[a].x - mouse.x;
                    let dy = particlesArray[a].y - mouse.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouse.radius) {
                        let opacity = 1 - (distance / mouse.radius);
                        ctx.strokeStyle = theme === 'dark'
                            ? `rgba(6, 182, 212, ${opacity * 0.15})`
                            : `rgba(99, 102, 241, ${opacity * 0.1})`;
                        ctx.lineWidth = 1.2;
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.stroke();
                    }
                }
            }
        };

        // Render Loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particlesArray.forEach(p => {
                p.update();
                p.draw();
            });
            connectParticles();
            requestAnimationFrame(animate);
        };
        animate();
    }

    // ==========================================================================
    // Developer Terminal HUD Boot-up Logger
    // ==========================================================================
    const hudContainer = document.getElementById('hudText');
    if (hudContainer) {
        const consoleLines = [
            "> Initializing Lokesh.Dev connection...",
            "> Booting core developer profile details... DONE",
            "> Fetching database libraries... OK",
            "> Loading PHP OOP dependencies... LOADED",
            "> Checking local servers integration... OK",
            "> Status: ACTIVE & Available for work."
        ];

        let lineIndex = 0;
        let charIndex = 0;

        const typeChar = () => {
            if (lineIndex < consoleLines.length) {
                const currentLine = consoleLines[lineIndex];
                
                // If starting a new line, create a wrapper element
                if (charIndex === 0) {
                    const lineDiv = document.createElement('div');
                    lineDiv.className = 'hud-line';
                    
                    // Add special classes for colors
                    if (currentLine.includes('DONE') || currentLine.includes('OK') || currentLine.includes('LOADED') || currentLine.includes('ACTIVE')) {
                        lineDiv.classList.add('success');
                    } else if (currentLine.startsWith('>')) {
                        lineDiv.classList.add('command');
                    }
                    
                    hudContainer.appendChild(lineDiv);
                }

                // Append the current character to the latest line
                const activeLineElement = hudContainer.lastChild;
                activeLineElement.textContent += currentLine[charIndex];
                charIndex++;

                if (charIndex < currentLine.length) {
                    setTimeout(typeChar, 25);
                } else {
                    // Line is fully typed, move to the next line
                    lineIndex++;
                    charIndex = 0;
                    setTimeout(typeChar, 350); // Pause between lines
                }
            }
        };

        // Trigger Typing Sequence
        setTimeout(typeChar, 800);
    }
});
