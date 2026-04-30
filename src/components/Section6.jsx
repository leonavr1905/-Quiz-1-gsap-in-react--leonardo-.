import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Section6.css';

gsap.registerPlugin(ScrollTrigger);

const Section6 = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Basic scroll animation test
    const animations = gsap.to('.layer-image', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
      opacity: 0.8,
      duration: 1,
    });

    return () => {
      if (animations && animations.scrollTrigger) {
        animations.scrollTrigger.kill();
      }
    };
  }, []);

  return (
    <section ref={containerRef} className="section6-container">
      <div className="section6-background">
        <img
          src="https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/hot/hot-60-pro/sec6/pc/sec6-blue-bg-pc.webp"
          alt="blue background"
          className="section6-blue-bg"
          onError={() => console.log('Section6 BG failed to load')}
        />
      </div>

      <div className="section6-content">
        <img
          src="https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/hot/hot-60-pro/sec6/pc/sec6-explode-part-1-pc.webp"
          alt="explode part 1"
          className="layer-image"
          onError={() => console.log('Layer 1 failed')}
        />
        
        <img
          src="https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/hot/hot-60-pro/sec6/pc/sec6-explode-part-2-pc.webp"
          alt="explode part 2"
          className="layer-image"
          onError={() => console.log('Layer 2 failed')}
        />

        <img
          src="https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/hot/hot-60-pro/sec6/pc/sec6-explode-part-3-pc.webp"
          alt="explode part 3"
          className="layer-image"
          onError={() => console.log('Layer 3 failed')}
        />

        <img
          src="https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/hot/hot-60-pro/sec6/pc/sec6-explode-part-4-pc.webp"
          alt="explode part 4"
          className="layer-image"
          onError={() => console.log('Layer 4 failed')}
        />
      </div>
    </section>
  );
};

export default Section6;
