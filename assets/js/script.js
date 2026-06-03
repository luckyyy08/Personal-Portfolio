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

    // Accent Theme Selector Logic
    const accentToggleBtn = document.getElementById('accentCustomizerToggle');
    const accentPanel = document.getElementById('accentCustomizerPanel');
    const accentDots = document.querySelectorAll('.accent-dot');

    if (accentToggleBtn && accentPanel) {
        accentToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            accentPanel.classList.toggle('show');
        });

        document.addEventListener('click', (e) => {
            if (!accentPanel.contains(e.target) && e.target !== accentToggleBtn && !accentToggleBtn.contains(e.target)) {
                accentPanel.classList.remove('show');
            }
        });
    }

    const savedAccent = localStorage.getItem('theme-accent') || 'indigo';
    setAccent(savedAccent);

    accentDots.forEach(dot => {
        dot.addEventListener('click', () => {
            const selectedAccent = dot.getAttribute('data-accent');
            setAccent(selectedAccent);
        });
    });

    function setAccent(accentName) {
        if (accentName === 'indigo') {
            document.documentElement.removeAttribute('data-theme-accent');
        } else {
            document.documentElement.setAttribute('data-theme-accent', accentName);
        }
        localStorage.setItem('theme-accent', accentName);

        const allSameAccentDots = document.querySelectorAll('.accent-dot');
        allSameAccentDots.forEach(d => {
            if (d.getAttribute('data-accent') === accentName) {
                d.classList.add('active');
            } else {
                d.classList.remove('active');
            }
        });
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
        const hudForm = document.getElementById('hudForm');
        const hudInput = document.getElementById('hudInput');
        const initialCursor = document.querySelector('.hud-console > .hud-body > .hud-cursor');

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

        const showInputForm = () => {
            if (initialCursor) initialCursor.style.display = 'none';
            if (hudForm) {
                hudForm.style.display = 'flex';
                // Trigger typing of introductory line
                setTimeout(() => {
                    if (hudInput) hudInput.focus();
                }, 50);
            }
        };

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
            } else {
                showInputForm();
            }
        };

        // Trigger Typing Sequence
        setTimeout(typeChar, 800);

        // Command handler
        const handleCommand = (cmdText) => {
            const trimmed = cmdText.trim().toLowerCase();
            const outputDiv = document.createElement('div');
            outputDiv.className = 'hud-line text-muted small mt-1 mb-2';

            if (trimmed === 'help') {
                outputDiv.innerHTML = `Available commands:<br>
  - <span class="text-info">about</span>    : Brief bio of Lokesh<br>
  - <span class="text-info">skills</span>   : Technical skillset<br>
  - <span class="text-info">projects</span> : Highlighted projects<br>
  - <span class="text-info">contact</span>  : Connect coordinates<br>
  - <span class="text-info">clear</span>    : Clear terminal logs`;
            } else if (trimmed === 'about') {
                outputDiv.innerHTML = `BSc Computer Science graduate, Full Stack Web Developer. Specializes in building secure databases, clean UI interfaces, and API connections. Based in Nashik, IN.`;
            } else if (trimmed === 'skills') {
                outputDiv.innerHTML = `Languages: PHP (OOP), JavaScript, MySQL, SQL, C++<br>
Web Stack: HTML5, CSS3, Bootstrap 5, Tailwind CSS, REST APIs<br>
Developer Tools: Git, GitHub, XAMPP, Vercel, VS Code`;
            } else if (trimmed === 'projects') {
                outputDiv.innerHTML = `Highlighted Projects:<br>
  - <span class="text-warning">GramSetu</span>   : Rural-Tech governance super app<br>
  - <span class="text-warning">CleanBox AI</span> : Gmail API storage declutter utility<br>
  - <span class="text-warning">SkyCast</span>   : Weather platform with geocoding & voice search`;
            } else if (trimmed === 'contact') {
                outputDiv.innerHTML = `Email   : lokeshahire85@gmail.com<br>
Phone   : +91 9579329098<br>
GitHub  : github.com/luckyyy08<br>
LinkedIn: linkedin.com/in/lokesh-ahire`;
            } else if (trimmed === 'clear') {
                hudContainer.innerHTML = '';
                return;
            } else if (trimmed === '') {
                return; // do nothing
            } else {
                outputDiv.innerHTML = `Command not found: '${cmdText}'. Type <span class="text-info">help</span> for options.`;
                outputDiv.className = 'hud-line text-danger small mt-1 mb-2';
            }

            hudContainer.appendChild(outputDiv);
        };

        if (hudForm) {
            hudForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const cmd = hudInput.value;
                
                // Add typed command to log
                const cmdLog = document.createElement('div');
                cmdLog.className = 'hud-line command';
                cmdLog.textContent = `visitor@lokesh.dev:~$ ${cmd}`;
                hudContainer.appendChild(cmdLog);

                // Process command
                handleCommand(cmd);

                // Clear and scroll
                hudInput.value = '';
                
                const hudConsole = document.querySelector('.hud-console');
                if (hudConsole) {
                    hudConsole.scrollTop = hudConsole.scrollHeight;
                }
            });

            // Focus terminal input on container click
            const consoleCard = document.querySelector('.hud-console');
            if (consoleCard) {
                consoleCard.addEventListener('click', () => {
                    if (hudForm.style.display !== 'none') {
                        hudInput.focus();
                    }
                });
            }
        }
    }

    // ==========================================================================
    // 3D Card Tilt Effect
    // ==========================================================================
    const tiltCards = document.querySelectorAll('.custom-card');

    tiltCards.forEach(card => {
        // Create glare overlay dynamically if not already present
        if (!card.querySelector('.tilt-glare')) {
            const glare = document.createElement('div');
            glare.className = 'tilt-glare';
            card.appendChild(glare);
        }

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Subtle rotation angles
            const rotateX = ((centerY - y) / centerY) * 8; 
            const rotateY = ((x - centerX) / centerX) * 8;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            card.style.transition = 'transform 0.1s ease';

            // Calculate glare highlight coords
            const glareX = (x / rect.width) * 100;
            const glareY = (y / rect.height) * 100;
            card.style.setProperty('--glare-x', `${glareX}%`);
            card.style.setProperty('--glare-y', `${glareY}%`);
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
            card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
        });
    });

    // ==========================================================================
    // Contact Form AJAX Submission
    // ==========================================================================
    const contactForm = document.querySelector('form[action*="formsubmit.co"]');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if (!contactForm.checkValidity()) {
                e.stopPropagation();
                contactForm.classList.add('was-validated');
                return;
            }

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnHtml = submitBtn.innerHTML;

            // Show loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Sending...`;

            const formData = new FormData(contactForm);
            const dataObject = {};
            formData.forEach((value, key) => {
                dataObject[key] = value;
            });

            const formAction = contactForm.getAttribute('action');
            const ajaxAction = formAction.replace('formsubmit.co/', 'formsubmit.co/ajax/');

            fetch(ajaxAction, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(dataObject)
            })
            .then(response => response.json())
            .then(data => {
                const successModalEl = document.getElementById('successModal');
                if (successModalEl) {
                    const successModal = new bootstrap.Modal(successModalEl);
                    successModal.show();
                } else {
                    alert('Message sent successfully!');
                }

                contactForm.reset();
                contactForm.classList.remove('was-validated');
            })
            .catch(error => {
                console.error('Error submitting form:', error);
                alert('Oops! There was an issue sending your message. Please try again or email directly.');
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnHtml;
            });
        });
    }

    // ==========================================================================
    // Recruiter Quick Message Templates Logic
    // ==========================================================================
    const templateTags = document.querySelectorAll('.template-tag');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    if (templateTags.length > 0 && subjectInput && messageInput) {
        templateTags.forEach(tag => {
            tag.addEventListener('click', () => {
                // Remove active class from other tags
                templateTags.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tag
                tag.classList.add('active');

                // Pre-populate input values
                subjectInput.value = tag.getAttribute('data-subject') || '';
                messageInput.value = tag.getAttribute('data-message') || '';
            });
        });

        // Parse search query parameters to check if auto-fill template triggers
        const urlParams = new URLSearchParams(window.location.search);
        const reason = urlParams.get('reason');
        if (reason) {
            const targetTag = document.querySelector(`.template-tag[data-template="${reason}"]`);
            if (targetTag) {
                targetTag.click();
            }
        }
    }

    // ==========================================================================
    // Scroll-Triggered Progress Bars Animation
    // ==========================================================================
    const progressBars = document.querySelectorAll('.progress-bar');
    if (progressBars.length > 0) {
        const barObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const targetWidth = bar.getAttribute('data-width');
                    if (targetWidth) {
                        bar.style.width = targetWidth;
                    }
                    barObserver.unobserve(bar);
                }
            });
        }, { threshold: 0.15 });

        progressBars.forEach(bar => {
            barObserver.observe(bar);
        });
    }
});
