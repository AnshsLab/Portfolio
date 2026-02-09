/* ============================================
   SKILLS PAGE JAVASCRIPT
   Beautiful Wave Animation on Page Entry
   ============================================ */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  
  // ============================================
  // REGISTER GSAP SCROLLTRIGGER
  // ============================================
  gsap.registerPlugin(ScrollTrigger);
  
  // ============================================
  // CATEGORY TITLE ANIMATIONS
  // ============================================
  const categoryTitles = document.querySelectorAll('.category-title');
  
  categoryTitles.forEach((title, index) => {
    gsap.from(title, {
      opacity: 0,
      x: -50,
      duration: 0.8,
      delay: index * 0.2,
      ease: 'power3.out'
    });
  });
  
  // ============================================
  // SCROLL-TRIGGERED ANIMATIONS
  // ============================================
  const categories = document.querySelectorAll('.skills-category');
  
  categories.forEach((category, index) => {
    gsap.from(category, {
      opacity: 0.3,
      y: 30,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: category,
        start: 'top 85%',
        end: 'top 60%',
        toggleActions: 'play none none reverse',
      }
    });
  });
  
  // ============================================
  // ENHANCED HOVER INTERACTIONS
  // ============================================
  const skillCards = document.querySelectorAll('.skill-card');
  
  skillCards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      const icon = card.querySelector('.skill-icon');
      
      // Icon animation - scale only, no rotation
      gsap.to(icon, {
        scale: 1.15,
        duration: 0.3,
        ease: 'back.out(1.5)'
      });
      
      // Card glow pulse
      gsap.to(card, {
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6), 0 0 40px rgba(255, 255, 255, 0.3)',
        duration: 0.3
      });
    });
    
    card.addEventListener('mouseleave', () => {
      const icon = card.querySelector('.skill-icon');
      
      // Reset icon
      gsap.to(icon, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
      
      // Reset card glow
      gsap.to(card, {
        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5), 0 0 30px rgba(255, 255, 255, 0.2)',
        duration: 0.3
      });
    });
    
    // Click animation - cards "pop" when clicked
    card.addEventListener('click', () => {
      gsap.to(card, {
        scale: 0.95,
        duration: 0.1,
        ease: 'power2.in',
        yoyo: true,
        repeat: 1
      });
    });
  });
  
  // ============================================
  // PARALLAX SCROLL EFFECT
  // ============================================
  gsap.to('body', {
    backgroundPosition: '50% 100%',
    ease: 'none',
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  });
  
  // ============================================
  // NAVIGATION INTERACTIONS
  // ============================================
  const navLinks = document.querySelectorAll('.projects-nav a');
  
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      gsap.to(link, {
        scale: 1.05,
        duration: 0.2,
        ease: 'power2.out'
      });
    });
    
    link.addEventListener('mouseleave', () => {
      gsap.to(link, {
        scale: 1,
        duration: 0.2,
        ease: 'power2.out'
      });
    });
  });
  
});

/* ============================================
   SIMPLE HOVER CUSTOMIZATION:
   ============================================
   
   TO CHANGE HOVER SCALE:
   - scale: 1.15 → adjust size increase
   - duration: 0.3 → animation speed
   
   TO ADD ROTATION BACK:
   - Add 'rotation: 360' to the gsap.to() call
   
   TO CHANGE CARD EFFECTS:
   - Adjust boxShadow values in hover events
   - Modify ease types for different feels
   
   ============================================ */