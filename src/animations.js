function triggerVictory() {
    const overlay = document.getElementById('victory-overlay');
    const victoryText = document.querySelector('.victory-text');
    const victorySubtext = document.querySelector('.victory-subtext');
    const continueBtn = document.querySelector('.continue-btn');
    
    // Show overlay
    overlay.style.display = 'flex';
    
    // Animate victory text
    setTimeout(() => {
        victoryText.style.animation = 'fadeInUp 1s forwards, victoryPulse 2s infinite alternate 1s';
    }, 500);
    
    // Animate subtext
    setTimeout(() => {
        victorySubtext.style.animation = 'fadeInUp 1s forwards';
    }, 1000);
    
    // Animate button
    setTimeout(() => {
        continueBtn.style.animation = 'fadeInUp 1s forwards';
    }, 1500);
    
    // Create explosions
    createExplosions();
    
    // Create confetti
    createConfetti();
    
    // Create fireworks
    createFireworks();
}

function hideVictory() {
    const overlay = document.getElementById('victory-overlay');
    overlay.style.display = 'none';
    
    // Remove all explosion and confetti elements
    document.querySelectorAll('.explosion, .confetti, .firework').forEach(el => {
        el.remove();
    });
}

function createExplosions() {
    const overlay = document.getElementById('victory-overlay');
    
    // Create large central explosion
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const explosion = document.createElement('div');
            explosion.className = 'explosion';
            
            // Random position around center
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 100 + 50;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;
            
            explosion.style.left = `calc(50% + ${x}px)`;
            explosion.style.top = `calc(50% + ${y}px)`;
            
            // Random explosion color
            const colors = ['#ff9900', '#ff6600', '#ff3300', '#ffcc00'];
            explosion.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            explosion.style.boxShadow = `0 0 20px ${explosion.style.backgroundColor}`;
            
            // Animation
            explosion.style.animation = `explode ${Math.random() * 0.5 + 0.5}s forwards`;
            
            overlay.appendChild(explosion);
            
            // Remove after animation
            setTimeout(() => {
                explosion.remove();
            }, 1000);
        }, i * 100);
    }
}

function createConfetti() {
    const overlay = document.getElementById('victory-overlay');
    const colors = ['#ff9900', '#ff6600', '#ff3300', '#ffcc00', '#0ff', '#0af'];
    
    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        // Random position at top
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.top = '0px';
        
        // Random color
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Random size
        const size = Math.random() * 10 + 5;
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        
        // Random shape
        if (Math.random() > 0.5) {
            confetti.style.borderRadius = '50%';
        }
        
        overlay.appendChild(confetti);
        
        // Animate
        const delay = Math.random() * 1000;
        const duration = Math.random() * 3 + 2;
        
        setTimeout(() => {
            confetti.style.opacity = '1';
            confetti.style.animation = `flyUp ${duration}s forwards`;
            
            // Remove after animation
            setTimeout(() => {
                confetti.remove();
            }, duration * 1000);
        }, delay);
    }
}

function createFireworks() {
    const overlay = document.getElementById('victory-overlay');
    
    // Create multiple firework bursts
    for (let burst = 0; burst < 8; burst++) {
        setTimeout(() => {
            const x = Math.random() * 80 + 10; // 10% to 90%
            const y = Math.random() * 80 + 10;
            
            for (let i = 0; i < 30; i++) {
                const particle = document.createElement('div');
                particle.className = 'firework';
                
                // Position at burst center
                particle.style.left = `${x}vw`;
                particle.style.top = `${y}vh`;
                
                // Random color
                const colors = ['#ff9900', '#ff6600', '#ff3300', '#ffcc00', '#0ff'];
                particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                particle.style.boxShadow = `0 0 10px ${particle.style.backgroundColor}`;
                
                // Random direction and distance
                const angle = Math.random() * Math.PI * 2;
                const distance = Math.random() * 100 + 50;
                const tx = Math.cos(angle) * distance;
                const ty = Math.sin(angle) * distance;
                
                particle.style.setProperty('--tx', `${tx}px`);
                particle.style.setProperty('--ty', `${ty}px`);
                
                // Random size
                const size = Math.random() * 8 + 2;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                
                overlay.appendChild(particle);
                
                // Animate
                particle.style.animation = `burst ${Math.random() * 0.5 + 0.5}s forwards`;
                
                // Remove after animation
                setTimeout(() => {
                    particle.remove();
                }, 800);
            }
        }, burst * 600);
    }
}

module.exports = { triggerVictory, hideVictory };