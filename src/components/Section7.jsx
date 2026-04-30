import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Section7.css';

gsap.registerPlugin(ScrollTrigger);

const Section7 = () => {
  const containerRef = useRef(null);
  const crackImgRef = useRef(null);
  const vfxLeft = useRef(null);
  const vfxRight = useRef(null);
  const phoneImgRef = useRef(null);
  const bottomRightRef = useRef(null);
  const labelImg1Ref = useRef(null);
  const labelImg2Ref = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const triggers = [];

    // Crack image reveal animation
    const crack = gsap.from(crackImgRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'center center',
        scrub: 1,
      },
      opacity: 0,
      scale: 0.8,
      duration: 1,
    });
    triggers.push(crack);

    // VFX left slide in
    const left = gsap.from(vfxLeft.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'center center',
        scrub: 1,
      },
      x: -200,
      opacity: 0,
      duration: 0.8,
    });
    triggers.push(left);

    // VFX right slide in
    const right = gsap.from(vfxRight.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'center center',
        scrub: 1,
      },
      x: 200,
      opacity: 0,
      duration: 0.8,
    });
    triggers.push(right);

    // Phone image falling animation
    const phone = gsap.from(phoneImgRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'center center',
        end: 'bottom center',
        scrub: 1,
      },
      y: -300,
      opacity: 0,
      rotation: -5,
      duration: 1,
    });
    triggers.push(phone);

    // Bottom right element flip animation
    const flip = gsap.from(bottomRightRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'center center',
        end: 'bottom center',
        scrub: 1,
      },
      opacity: 0,
      rotateY: 90,
      duration: 0.8,
    });
    triggers.push(flip);

    // Labels fade and slide in
    const labels = gsap.from([labelImg1Ref.current, labelImg2Ref.current], {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'center center',
        scrub: 1,
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.6,
    });
    triggers.push(labels);

    return () => {
      triggers.forEach((anim) => {
        if (anim && anim.scrollTrigger) {
          anim.scrollTrigger.kill();
        }
      });
    };
  }, []);

  return (
    <section ref={containerRef} className="section7-container">
      {/* Blue background */}
      <img
        src="https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/hot/hot-60-pro/sec7/pc/sec7-phone-bg-pc-v2.webp"
        alt="phone background"
        className="section7-background"
      />

      <div className="section7-content">
        {/* Cracks image */}
        <img
          ref={crackImgRef}
          src="https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/hot/hot-60-pro/sec7/pc/sec7-cracks-pc-v2.webp"
          alt="cracks"
          className="crack-image"
        />

        {/* VFX Effects */}
        <img
          ref={vfxLeft}
          src="https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/hot/hot-60-pro/sec7/pc/sec7-crack-effect-left-pc-v2.webp"
          alt="crack effect left"
          className="vfx-image vfx-left"
        />

        <img
          ref={vfxRight}
          src="https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/hot/hot-60-pro/sec7/pc/sec7-crack-effect-right-pc-v2.webp"
          alt="crack effect right"
          className="vfx-image vfx-right"
        />

        {/* Falling phone image */}
        <img
          ref={phoneImgRef}
          src="https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/hot/hot-60-pro/sec7/pc/sec7-falling-phone-pc-v3.webp"
          alt="falling phone"
          className="phone-image"
        />

        {/* Bottom right flip element */}
        <img
          ref={bottomRightRef}
          src="https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/hot/hot-60-pro/sec7/pc/sec7-flip-pc-v2.webp"
          alt="flip element"
          className="flip-element"
        />

        {/* Label stickers */}
        <img
          ref={labelImg1Ref}
          src="https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/hot/hot-60i/sec6/pc/sticker1.webp"
          alt="label 1"
          className="label-sticker sticker-1"
        />

        <img
          ref={labelImg2Ref}
          src="https://d3o31au25zfcly.cloudfront.net/newfileadmin/usp/hot/hot-60i/sec6/pc/sticker2.webp"
          alt="label 2"
          className="label-sticker sticker-2"
        />
      </div>
    </section>
  );
};

export default Section7;
