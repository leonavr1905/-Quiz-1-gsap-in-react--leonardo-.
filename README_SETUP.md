# GSAP Animation Recreation - Infinix HOT 60 Pro

A React + Vite project recreating the scroll-based animations from the Infinix HOT 60 Pro website using GSAP (GreenSock Animation Platform).

## Project Overview

This project implements two main animation sections:

### Section 6: Pinned Scroll Animation
- Uses GSAP Timeline with ScrollTrigger
- Elements animate in sequential order as user scrolls
- Section stays pinned while animations play
- Multiple layers (explode parts) reveal during scroll
- Includes labels and Corning logo

**Key GSAP Features Used:**
- `gsap.timeline()` with ScrollTrigger
- `pin: true` for pinned animations
- `scrub: 1` for scroll-synced animations
- Sequential staggered animations

### Section 7: Scroll Reveal Animation
- NO pinning (uses scroll reveal instead)
- Elements animate based on viewport position
- Includes crack effects, phone falling animation, and flip elements
- Label stickers fade in during scroll
- Parallax effects on VFX elements

**Key GSAP Features Used:**
- `gsap.from()` for reveal animations
- `ScrollTrigger` for scroll-based triggers
- `rotateY` for 3D flip animations
- Staggered animations for multiple elements

## Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173/`

3. **Build for Production**
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/
│   ├── Section6.jsx          # Pinned scroll animation
│   ├── Section6.css          # Section 6 styles
│   ├── Section7.jsx          # Scroll reveal animation
│   └── Section7.css          # Section 7 styles
├── App.jsx                   # Main app component
├── App.css                   # Global app styles
├── index.css                 # Root styles and CSS variables
└── main.jsx                  # React entry point
```

## Asset Sources

All assets are loaded directly from the official CDN:
- `https://d3o31au25zfcly.cloudfront.net/` (Main CDN)

### Section 6 Assets
- Container shadow mask
- Explode parts (4 layers)
- Label content images
- Blue background
- Corning logo

### Section 7 Assets
- Crack effects (left/right VFX)
- Falling phone image
- Flip element
- Label stickers
- Phone background

## Animation Techniques

### ScrollTrigger Integration
Both sections use GSAP's ScrollTrigger plugin to sync animations with scroll position:

```javascript
gsap.registerPlugin(ScrollTrigger);

// For pinned animations (Section 6)
scrollTrigger: {
  trigger: containerRef.current,
  start: 'top top',
  end: 'bottom top',
  pin: true,
  scrub: 1,
}

// For scroll reveal (Section 7)
scrollTrigger: {
  trigger: containerRef.current,
  start: 'top center',
  end: 'center center',
  scrub: 1,
}
```

### Performance Optimization
- Uses `useRef` for DOM element references
- Registers plugins only once
- Cleans up ScrollTrigger instances on unmount
- Responsive design with CSS media queries

## Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Requires JavaScript enabled

## Responsive Design

The project includes responsive breakpoints:
- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: Below 768px

All animations scale appropriately for different screen sizes.

## Customization

### Adjusting Animation Speed
Modify the `scrub` value in ScrollTrigger options:
```javascript
scrub: 1  // 1 second smoothing (increase for slower)
scrub: 0.5 // 0.5 second smoothing (faster)
```

### Changing Animation Duration
Update the `duration` property in gsap animation calls:
```javascript
gsap.to(element, { opacity: 1, duration: 0.5 })
```

### Repositioning Elements
Adjust the CSS positioning in the `.css` files:
```css
.layer-image {
  max-width: 400px;
  /* Modify positioning as needed */
}
```

## Troubleshooting

**Animations not playing:**
- Check browser console for errors
- Ensure ScrollTrigger plugin is registered: `gsap.registerPlugin(ScrollTrigger)`
- Verify elements have proper `ref` assignments

**Images not loading:**
- Check network tab in DevTools
- Verify CDN URLs are correct and accessible
- Ensure CORS is allowed

**Performance issues:**
- Reduce number of animated elements
- Disable animations on mobile if needed
- Use `will-change` CSS property sparingly

## Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **GSAP 3** - Animation library
- **CSS3** - Styling and responsive design

## License

This project is created for educational purposes.

## References

- [GSAP Documentation](https://gsap.com/)
- [ScrollTrigger Plugin](https://gsap.com/docs/v3/Plugins/ScrollTrigger)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
