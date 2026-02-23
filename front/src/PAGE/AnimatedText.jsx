import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../STYLE/animatedtext.css';

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = () => {
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Only run animation on desktop
    if (!isMobile && window.innerWidth > 768) {
      const timer = setTimeout(() => {
        const words = textRef.current?.querySelectorAll('.word');
        
        if (!words || words.length === 0) return;

        ScrollTrigger.getAll().forEach(st => {
          if (st.trigger === containerRef.current) {
            st.kill();
          }
        });

        gsap.fromTo(
          words,
          {
            color: '#d0d0d0'
          },
          {
            color: '#000000',
            duration: 0.3,
            stagger: 0.03,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 20%',
              end: 'bottom 80%',
              scrub: 0.5,
              markers: false,
            }
          }
        );
      }, 100);

      return () => {
        clearTimeout(timer);
        window.removeEventListener('resize', checkMobile);
        ScrollTrigger.getAll().forEach(st => {
          if (st.trigger === containerRef.current) {
            st.kill();
          }
        });
      };
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  const text = "Full-Stack MERN Developer with experience delivering 15+ production-ready applications for startups and service-based businesses. Skilled in building scalable architectures, secure REST APIs, and performance-optimized systems. Experienced in developing AI-powered platforms, healthcare management systems, and real-time applications. Passionate about transforming client requirements into reliable, business-driven digital solutions.";

  const words = text.split(' ');

  return (
    <section ref={containerRef} className={`animated-text-section ${isMobile ? 'mobile' : ''}`}>
      <div className="animated-text-container">
        {isMobile ? (
          <div className="mobile-text-content">
            <h2 className="mobile-text-heading">About Me</h2>
            <p className="mobile-text-paragraph">{text}</p>
          </div>
        ) : (
          <p ref={textRef} className="animated-text">
            {words.map((word, index) => (
              <span key={index} className="word">
                {word}{' '}
              </span>
            ))}
          </p>
        )}
      </div>
    </section>
  );
};

export default AnimatedText;
