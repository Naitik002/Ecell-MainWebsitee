"use client";

import { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import LightRays from './LightRays';
// 🆕 Framer Motion import
import { motion, AnimatePresence } from 'framer-motion';

const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = '132, 0, 255';
const MOBILE_BREAKPOINT = 768;

const cardData = [
    {
        color: '#060010',
        title: 'Startup Expo',
        description: 'Startup Expo is a dynamic showcase of innovation, bringing founders and their startups together with executives, investors, venture capitalists, and students on a single platform. As the cornerstone event of E-Summit, it attracted a staggering 30,000+ footfall and highlighted the vision and creativity of entrepreneurs. Furthermore, startups received recognition through prizes and grants, offering a powerful opportunity for funding, networking and mentorship.',
        image: './events/startupExpo.jpg'
    },
    {
        color: '#060010',
        title: 'Business Plan',
        description: 'Business Plan Competition gives participants a chance to transform their vision into ventures with real-world impact, while also offering an excellent opportunity to learn the nuances of entrepreneurship. Participants refine their ideas into actionable business models and with guidance from expert judges, gain practical insight that propels them in their entrepreneurial journey.',
        image: './events/bussinessPlan.jpg'
    },
    {
        color: '#060010',
        title: 'Case Study',
        description: 'Case Study Competition is a strategic challenge that pushes participants to question conventional thinking patterns. As they compete to discover the most creative solutions, they encounter real problems faced by business ventures and startups. Consequently, the event strengthens their ability to tackle such challenges and sharpens their problem-solving and critical-thinking skills, qualities essential for aspiring changemakers.',
        image: './events/caseStudy.jpg'
    },
    {
        color: '#060010',
        title: 'Keynote Session',
        description: 'Igniting ambition and ideas, Keynote Sessions are electric exchanges that challenge conventions, empower the entrepreneurial drive and spark bold visions for the future. Moreover, from startup struggles to success secrets, these discussions fuel ideas, change perspectives and inspire the next generation of changemakers.',

        image: './events/keynoteSessions.jpg'

    },
    {
        color: '#060010',
        title: 'Business Plan Junior',
        description: 'Business Plan Junior Competition is an exclusive event for the first and second year students to compete in the quest of finding an idea that has the potential to become a startup, putting their problem solving capacity to test and encouraging them to innovate and strategize to take their ideas from ideation to validation phase under the mentorship of seasoned industry professionals. ',

        image: './events/businessPlanJr.jpg'
    },
    {
        color: '#060010',
        title: 'IPL Auction',
        description: 'IPL Auction Simulation is where strategy and decision meet timely precision, emulating the real IPL auction with ten teams competing in a high-energy bidding process to assemble the best squad with limited virtual currency. Additionally, the event is designed to evaluate entrepreneurial capability, as every bid influences a team’s strategy and leads to the selection of their final eleven.',

        image: './events/iplAuction.jpg'
    },
    {
        color: '#060010',
        title: 'Book Fair',
        description: 'Book Fair is a vibrant celebration of knowledge, offering a diverse collection of books across fiction, finance, technology and self-improvement. It creates a unique space for like-minded individuals to connect and share an interest for reading. Moreover, it engages young minds by opening doors to vast intellectual resources and opportunities, all while fostering a renewed passion for books.',

        image: './events/bookfair.jpg'
    },
    {
        color: '#060010',
        title: 'Stock Trading Simulation',
        description: 'Stock Trading Simulation puts financial foresight to the test, offering a real-time virtual market where sharp decisions race against the clock. In this risk-free environment, participants gain courage and clarity, empowering them to leap into real-world markets with greater confidence and insight.',

        image: './events/stockTrading.jpeg'
    },
    
    
    {
        color: '#060010',
        title: 'Creators camp',
        description: 'The Creator’s Camp hosts an exciting lineup of influential creators and artists who share their journeys to success and recognition. This is followed by light-hearted Q&A rounds and enriching fan interactions. With guests ranging from contemporary icons to comedians, storytellers to motivational speakers, the event brings inspiration and entertainment to the heart of E-Summit’s entrepreneurial spirit.',

        image: './events/creatorsCamp.jpg'
    }
];

// Add timeline data for events
const eventTimeline = [
    { label: "Startup Expo", color: "#fac176" },
    { label: "B-Plan", color: "#fac176" },
    { label: "Case Study", color: "#fac176" },
    { label: "Pe Charcha", color: "#fac176" },
    { label: "Event 6", color: "#fac176" },
    { label: "IPL Auction", color: "#fac176" },
];

const createParticleElement = (x, y, color = DEFAULT_GLOW_COLOR) => {
    const el = document.createElement('div');
    el.className = 'particle';
    el.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 0 0 6px rgba(${color}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
  `;
    return el;
};

const calculateSpotlightValues = radius => ({
    proximity: radius * 0.5,
    fadeDistance: radius * 0.75
});

const updateCardGlowProperties = (card, mouseX, mouseY, glow, radius) => {
    const rect = card.getBoundingClientRect();
    const relativeX = ((mouseX - rect.left) / rect.width) * 100;
    const relativeY = ((mouseY - rect.top) / rect.height) * 100;

    card.style.setProperty('--glow-x', `${relativeX}%`);
    card.style.setProperty('--glow-y', `${relativeY}%`);
    card.style.setProperty('--glow-intensity', glow.toString());
    card.style.setProperty('--glow-radius', `${radius}px`);
};

const ParticleCard = ({
    children,
    className = '',
    disableAnimations = false,
    style,
    particleCount = DEFAULT_PARTICLE_COUNT,
    glowColor = DEFAULT_GLOW_COLOR,
    enableTilt = true,
    clickEffect = false,
    enableMagnetism = false
}) => {
    const cardRef = useRef(null);
    const particlesRef = useRef([]);
    const timeoutsRef = useRef([]);
    const isHoveredRef = useRef(false);
    const memoizedParticles = useRef([]);
    const particlesInitialized = useRef(false);
    const magnetismAnimationRef = useRef(null);

    const initializeParticles = useCallback(() => {
        if (particlesInitialized.current || !cardRef.current) return;

        const { width, height } = cardRef.current.getBoundingClientRect();
        memoizedParticles.current = Array.from({ length: particleCount }, () =>
            createParticleElement(Math.random() * width, Math.random() * height, glowColor)
        );
        particlesInitialized.current = true;
    }, [particleCount, glowColor]);

    const clearAllParticles = useCallback(() => {
        timeoutsRef.current.forEach(clearTimeout);
        timeoutsRef.current = [];
        magnetismAnimationRef.current?.kill();

        particlesRef.current.forEach(particle => {
            gsap.to(particle, {
                scale: 0,
                opacity: 0,
                duration: 0.3,
                ease: 'back.in(1.7)',
                onComplete: () => {
                    particle.parentNode?.removeChild(particle);
                }
            });
        });
        particlesRef.current = [];
    }, []);

    const animateParticles = useCallback(() => {
        if (!cardRef.current || !isHoveredRef.current) return;

        if (!particlesInitialized.current) {
            initializeParticles();
        }

        memoizedParticles.current.forEach((particle, index) => {
            const timeoutId = setTimeout(() => {
                if (!isHoveredRef.current || !cardRef.current) return;

                const clone = particle.cloneNode(true);
                cardRef.current.appendChild(clone);
                particlesRef.current.push(clone);

                gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' });

                gsap.to(clone, {
                    x: (Math.random() - 0.5) * 100,
                    y: (Math.random() - 0.5) * 100,
                    rotation: Math.random() * 360,
                    duration: 2 + Math.random() * 2,
                    ease: 'none',
                    repeat: -1,
                    yoyo: true
                });

                gsap.to(clone, {
                    opacity: 0.3,
                    duration: 1.5,
                    ease: 'power2.inOut',
                    repeat: -1,
                    yoyo: true
                });
            }, index * 100);

            timeoutsRef.current.push(timeoutId);
        });
    }, [initializeParticles]);



    useEffect(() => {
        if (disableAnimations || !cardRef.current) return;

        const element = cardRef.current;

        const handleMouseEnter = () => {
            isHoveredRef.current = true;
            animateParticles();

            if (enableTilt) {
                gsap.to(element, {
                    rotateX: 5,
                    rotateY: 5,
                    duration: 0.3,
                    ease: 'power2.out',
                    transformPerspective: 1000
                });
            }
        };

        const handleMouseLeave = () => {
            isHoveredRef.current = false;
            clearAllParticles();

            if (enableTilt) {
                gsap.to(element, {
                    rotateX: 0,
                    rotateY: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }

            if (enableMagnetism) {
                gsap.to(element, {
                    x: 0,
                    y: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        };

        const handleMouseMove = e => {
            if (!enableTilt && !enableMagnetism) return;

            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            if (enableTilt) {
                const rotateX = ((y - centerY) / centerY) * -10;
                const rotateY = ((x - centerX) / centerX) * 10;

                gsap.to(element, {
                    rotateX,
                    rotateY,
                    duration: 0.1,
                    ease: 'power2.out',
                    transformPerspective: 1000
                });
            }

            if (enableMagnetism) {
                const magnetX = (x - centerX) * 0.05;
                const magnetY = (y - centerY) * 0.05;

                magnetismAnimationRef.current = gsap.to(element, {
                    x: magnetX,
                    y: magnetY,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        };

        const handleClick = e => {
            if (!clickEffect) return;

            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const maxDistance = Math.max(
                Math.hypot(x, y),
                Math.hypot(x - rect.width, y),
                Math.hypot(x, y - rect.height),
                Math.hypot(x - rect.width, y - rect.height)
            );

            const ripple = document.createElement('div');
            ripple.style.cssText = `
        position: absolute;
        width: ${maxDistance * 2}px;
        height: ${maxDistance * 2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
        left: ${x - maxDistance}px;
        top: ${y - maxDistance}px;
        pointer-events: none;
        z-index: 1000;
      `;

            element.appendChild(ripple);

            gsap.fromTo(
                ripple,
                {
                    scale: 0,
                    opacity: 1
                },
                {
                    scale: 1,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    onComplete: () => ripple.remove()
                }
            );
        };

        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);
        element.addEventListener('mousemove', handleMouseMove);
        element.addEventListener('click', handleClick);

        return () => {
            isHoveredRef.current = false;
            element.removeEventListener('mouseenter', handleMouseEnter);
            element.removeEventListener('mouseleave', handleMouseLeave);
            element.removeEventListener('mousemove', handleMouseMove);
            element.removeEventListener('click', handleClick);
            clearAllParticles();
        };
    }, [animateParticles, clearAllParticles, disableAnimations, enableTilt, enableMagnetism, clickEffect, glowColor]);

    return (
        <div
            ref={cardRef}
            className={`${className} relative overflow-hidden`}
            style={{ ...style, position: 'relative', overflow: 'hidden' }}
        >
            {children}
        </div>
    );
};

const GlobalSpotlight = ({
    gridRef,
    disableAnimations = false,
    enabled = true,
    spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
    glowColor = DEFAULT_GLOW_COLOR
}) => {
    const spotlightRef = useRef(null);
    const isInsideSection = useRef(false);

    useEffect(() => {
        if (disableAnimations || !gridRef?.current || !enabled) return;

        const spotlight = document.createElement('div');
        spotlight.className = 'global-spotlight';
        spotlight.style.cssText = `
      position: fixed;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${glowColor}, 0.15) 0%,
        rgba(${glowColor}, 0.08) 15%,
        rgba(${glowColor}, 0.04) 25%,
        rgba(${glowColor}, 0.02) 40%,
        rgba(${glowColor}, 0.01) 65%,
        transparent 70%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
    `;
        document.body.appendChild(spotlight);
        spotlightRef.current = spotlight;

        const handleMouseMove = e => {
            if (!spotlightRef.current || !gridRef.current) return;

            const section = gridRef.current.closest('.bento-section');
            const rect = section?.getBoundingClientRect();
            const mouseInside =
                rect && e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;

            isInsideSection.current = mouseInside || false;
            const cards = gridRef.current.querySelectorAll('.card');

            if (!mouseInside) {
                gsap.to(spotlightRef.current, {
                    opacity: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
                cards.forEach(card => {
                    card.style.setProperty('--glow-intensity', '0');
                });
                return;
            }

            const { proximity, fadeDistance } = calculateSpotlightValues(spotlightRadius);
            let minDistance = Infinity;

            cards.forEach(card => {
                const cardElement = card;
                const cardRect = cardElement.getBoundingClientRect();
                const centerX = cardRect.left + cardRect.width / 2;
                const centerY = cardRect.top + cardRect.height / 2;
                const distance =
                    Math.hypot(e.clientX - centerX, e.clientY - centerY) - Math.max(cardRect.width, cardRect.height) / 2;
                const effectiveDistance = Math.max(0, distance);

                minDistance = Math.min(minDistance, effectiveDistance);

                let glowIntensity = 0;
                if (effectiveDistance <= proximity) {
                    glowIntensity = 1;
                } else if (effectiveDistance <= fadeDistance) {
                    glowIntensity = (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
                }

                updateCardGlowProperties(cardElement, e.clientX, e.clientY, glowIntensity, spotlightRadius);
            });

            gsap.to(spotlightRef.current, {
                left: e.clientX,
                top: e.clientY,
                duration: 0.1,
                ease: 'power2.out'
            });

            const targetOpacity =
                minDistance <= proximity
                    ? 0.8
                    : minDistance <= fadeDistance
                        ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8
                        : 0;

            gsap.to(spotlightRef.current, {
                opacity: targetOpacity,
                duration: targetOpacity > 0 ? 0.2 : 0.5,
                ease: 'power2.out'
            });
        };

        const handleMouseLeave = () => {
            isInsideSection.current = false;
            gridRef.current?.querySelectorAll('.card').forEach(card => {
                card.style.setProperty('--glow-intensity', '0');
            });
            if (spotlightRef.current) {
                gsap.to(spotlightRef.current, {
                    opacity: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            spotlightRef.current?.parentNode?.removeChild(spotlightRef.current);
        };
    }, [gridRef, disableAnimations, enabled, spotlightRadius, glowColor]);

    return null;
};

const BentoCardGrid = ({ children, gridRef }) => (
    <div
        className="bento-section grid gap-2 p-3 w-[100vw] select-none relative"
        style={{ fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.5rem)' }}
        ref={gridRef}
    >
        {children}
    </div>
);

const useMobileDetection = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return isMobile;
};

const MagicBento = ({
    textAutoHide = true,
    enableStars = true,
    enableSpotlight = true,
    enableBorderGlow = true,
    disableAnimations = false,
    spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
    particleCount = DEFAULT_PARTICLE_COUNT,
    enableTilt = false,
    glowColor = DEFAULT_GLOW_COLOR,
    clickEffect = true,
    enableMagnetism = true
}) => {
    const gridRef = useRef(null);
    const isMobile = useMobileDetection();
    const shouldDisableAnimations = disableAnimations || isMobile;

    const [selectedCard, setSelectedCard] = useState(null);

    // 🆕 Close overlay
    const closeOverlay = () => setSelectedCard(null);

    

    useEffect(() => {
        if (isMobile) {
            if (selectedCard) {
                document.body.style.overflow = 'hidden'; // lock scroll
            } else {
                document.body.style.overflow = ''; // restore scroll
            }
        }

        // Cleanup when component unmounts
        return () => {
            document.body.style.overflow = '';
        };
    }, [selectedCard, isMobile]);

    return (
        <>
            <style>
                {`
          .bento-section {
            --glow-x: 50%;
            --glow-y: 50%;
            --glow-intensity: 0;
            --glow-radius: 100px;
            --glow-color: ${glowColor};
            --border-color: rgba(${glowColor}, 0.2);
            --background-dark: #060010;
            --white: hsl(0, 0%, 100%);
            --purple-primary: rgba(132, 0, 255, 1);
            --purple-glow: rgba(132, 0, 255, 0.2);
            --purple-border: rgba(132, 0, 255, 0.8);
          }
          
          .card-responsive {
            grid-template-columns: 1fr;
            width: 90%;
            margin: 0 auto;
            padding: 0.5rem;
          }
          
          @media (min-width: 600px) {
            .card-responsive {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          
          @media (min-width: 1024px) {
            .card-responsive {
              grid-template-columns: repeat(4, 1fr);
            }
            
            .card-responsive .card:nth-child(3) {
              grid-column: span 2;
              grid-row: span 2;
            }
            
            .card-responsive .card:nth-child(4) {
              grid-column: 1 / span 2;
              grid-row: 2 / span 2;
            }
            
            .card-responsive .card:nth-child(6) {
              grid-column: 4;
              grid-row: 3;
            }
          }
          
          .card--border-glow::after {
            content: '';
            position: absolute;
            inset: 0;
            padding: 6px;
            background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
                rgba(${glowColor}, calc(var(--glow-intensity) * 0.8)) 0%,
                rgba(${glowColor}, calc(var(--glow-intensity) * 0.4)) 30%,
                transparent 60%);
            border-radius: inherit;
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask-composite: subtract;
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            pointer-events: none;
            transition: opacity 0.3s ease;
            z-index: 1;
          }
          
          .card--border-glow:hover::after {
            opacity: 1;
          }
          
          .card--border-glow:hover {
            box-shadow: 0 4px 20px rgba(46, 24, 78, 0.4), 0 0 30px rgba(${glowColor}, 0.2);
          }
          
          .particle::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: rgba(${glowColor}, 0.2);
            border-radius: 50%;
            z-index: -1;
          }
          
          .particle-container:hover {
            box-shadow: 0 4px 20px rgba(46, 24, 78, 0.2), 0 0 30px rgba(${glowColor}, 0.2);
          }
          
          .text-clamp-1 {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            line-clamp: 1;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          
          .text-clamp-2 {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          
          @media (max-width: 768px) {
          .card-responsive .card:nth-child(1),
  .card-responsive .card:nth-child(4) {
    height: 50px; 
                }}

        `}
            </style>

            {enableSpotlight && (
                <GlobalSpotlight
                    gridRef={gridRef}
                    disableAnimations={shouldDisableAnimations}
                    enabled={enableSpotlight}
                    spotlightRadius={spotlightRadius}
                    glowColor={glowColor}
                />
            )}

            <BentoCardGrid gridRef={gridRef}>
                <div
                    className={`grid gap-4 md:gap-8 w-full 
  md:grid-cols-2 
  [grid-template-areas:'startup_startup''bplan_casestudy''pecharcha_pecharcha''event6_iplauction''workshop_workshop''pitchers_bizquiz'] 
  max-w-6xl mx-auto mb-20`}
                >
                    {cardData.map((card, index) => {
                        const baseClassName = `card flex flex-col justify-between relative aspect-[4/3] min-h-[200px] max-h-[55vh] w-full max-w-full p-2 rounded-[20px] border border-solid font-light overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] ${enableBorderGlow ? 'card--border-glow' : ''
                            }`;

                        const cardStyle = {
                            backgroundColor: card.color || 'var(--background-dark)',

                            borderColor: 'var(--border-color)',
                            color: 'var(--white)',
                            '--glow-x': '50%',
                            '--glow-y': '50%',
                            '--glow-intensity': '0',
                            '--glow-radius': '200px'
                        };

                        if (enableStars) {
                            return (
                                <ParticleCard
                                    key={index}
                                    className={`${baseClassName} ${
                                        index === 0
                                            ? '[grid-area:startup]'
                                            : index === 1
                                                ? '[grid-area:bplan]'
                                                : index === 2
                                                    ? '[grid-area:casestudy]'
                                                    : index === 3
                                                        ? '[grid-area:pecharcha]'
                                                        : index === 4
                                                            ? '[grid-area:event6]'
                                                            : index === 5
                                                                ? '[grid-area:iplauction]'
                                                                : index === 7
                                                                    ? '[grid-area:pitchers]'
                                                                    : index === 6
                                                                        ? '[grid-area:bizquiz]'
                                                                        : '[grid-area:workshop]'
                                        } group`}
                                    style={cardStyle}
                                    disableAnimations={shouldDisableAnimations}
                                    particleCount={particleCount}
                                    glowColor={glowColor}
                                    enableTilt={enableTilt}
                                    clickEffect={clickEffect}
                                    enableMagnetism={enableMagnetism}
                                >
                                    <div
                                        className="absolute inset-0 bg-cover bg-no-repeat bg-center transition-transform duration-700 ease-out scale-100 group-hover:scale-110 group-hover:opacity-50"
                                        style={{ backgroundImage: `url(${card.image})` }}
                                    />

                                    {/* Dark Overlay */}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-60 transition-opacity duration-500" />

                                    {/* Text Layer */}
                                    <div
                                        onClick={() => { if (isMobile) setSelectedCard(card) }}
                                        className="relative z-10 flex flex-col justify-between h-full p-1 md:p-5">
                                        {/* Title always visible */}
                                        <h3 className="text-xl md:text-4xl font-semibold">{card.title}</h3>

                                        {/* Description hidden initially */}
                                        <p className="mt-0 md:mt-2 hidden md:block md:text-lg opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                                            {card.description}
                                        </p>
                                    </div>
                                </ParticleCard>
                            );
                        }

                        return (
                            <div
                                key={index}
                                className={`${baseClassName} group overflow-hidden`}
                                style={cardStyle}
                                ref={el => {
                                    if (!el) return;

                                    const handleMouseMove = e => {
                                        if (shouldDisableAnimations) return;

                                        const rect = el.getBoundingClientRect();
                                        const x = e.clientX - rect.left;
                                        const y = e.clientY - rect.top;
                                        const centerX = rect.width / 2;
                                        const centerY = rect.height / 2;

                                        if (enableTilt) {
                                            const rotateX = ((y - centerY) / centerY) * -10;
                                            const rotateY = ((x - centerX) / centerX) * 10;

                                            gsap.to(el, {
                                                rotateX,
                                                rotateY,
                                                duration: 0.1,
                                                ease: 'power2.out',
                                                transformPerspective: 1000
                                            });
                                        }

                                        if (enableMagnetism) {
                                            const magnetX = (x - centerX) * 0.05;
                                            const magnetY = (y - centerY) * 0.05;

                                            gsap.to(el, {
                                                x: magnetX,
                                                y: magnetY,
                                                duration: 0.3,
                                                ease: 'power2.out'
                                            });
                                        }
                                    };

                                    const handleMouseLeave = () => {
                                        if (shouldDisableAnimations) return;

                                        if (enableTilt) {
                                            gsap.to(el, {
                                                rotateX: 0,
                                                rotateY: 0,
                                                duration: 0.3,
                                                ease: 'power2.out'
                                            });
                                        }

                                        if (enableMagnetism) {
                                            gsap.to(el, {
                                                x: 0,
                                                y: 0,
                                                duration: 0.3,
                                                ease: 'power2.out'
                                            });
                                        }
                                    };

                                    const handleClick = e => {
                                        if (!clickEffect || shouldDisableAnimations) return;

                                        const rect = el.getBoundingClientRect();
                                        const x = e.clientX - rect.left;
                                        const y = e.clientY - rect.top;

                                        const maxDistance = Math.max(
                                            Math.hypot(x, y),
                                            Math.hypot(x - rect.width, y),
                                            Math.hypot(x, y - rect.height),
                                            Math.hypot(x - rect.width, y - rect.height)
                                        );

                                        const ripple = document.createElement('div');
                                        ripple.style.cssText = `
                      position: absolute;
                      width: ${maxDistance * 2}px;
                      height: ${maxDistance * 2}px;
                      border-radius: 50%;
                      background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
                      left: ${x - maxDistance}px;
                      top: ${y - maxDistance}px;
                      pointer-events: none;
                      z-index: 1000;
                    `;

                                        el.appendChild(ripple);

                                        gsap.fromTo(
                                            ripple,
                                            {
                                                scale: 0,
                                                opacity: 1
                                            },
                                            {
                                                scale: 1,
                                                opacity: 0,
                                                duration: 0.8,
                                                ease: 'power2.out',
                                                onComplete: () => ripple.remove()
                                            }
                                        );
                                    };

                                    el.addEventListener('mousemove', handleMouseMove);
                                    el.addEventListener('mouseleave', handleMouseLeave);
                                    el.addEventListener('click', handleClick);
                                }}
                            >


                                {/* Dark Overlay */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-60 transition-opacity duration-500" />

                                {/* Text Layer */}
                                <div className="relative z-10 flex flex-col justify-between h-full p-5">
                                    {/* Title always visible */}
                                    <h3 className="text-base font-semibold">{card.title}</h3>

                                    {/* Description hidden initially */}
                                    <p className="mt-2 text-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </BentoCardGrid>

            {/* Timeline for events */}
            

            {/* 🆕 AnimatePresence for overlay */}
            <AnimatePresence>
            {isMobile && selectedCard && (
                <motion.div
                    className="fixed inset-0 w-screen h-[100vh] bg-black/70 backdrop-blur-md z-[999] overflow-hidden"
                    onClick={closeOverlay}
                    initial={{ x: '100%', opacity: 0.6 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: '100%', opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30, duration: 1 }}
                >
                    <LightRays
                        raysOrigin="top-center"
                        raysColor="#fac176"
                        raysSpeed={0.5}
                        lightSpread={3}
                        rayLength={5}
                        followMouse={true}
                        mouseInfluence={0.1}
                        noiseAmount={0.1}
                        distortion={0.05}
                        className="custom-rays"
                    />
                    <div
                        className="absolute top-0 left-0 w-full h-full bg-[#00000] text-white rounded-none p-6 md:p-10 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <motion.button
                            onClick={closeOverlay}
                            className="absolute top-4 right-4 text-[#fac176] text-3xl hover:text-gray-400"
                            initial={{ opacity: 0, y: -20, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.8 }}
                            transition={{ type: "spring", stiffness: 400, damping: 30, duration: 1 }}
                            whileTap={{ scale: 0.85, rotate: 20 }}
                        >
                            ×
                        </motion.button>

                        <div className="flex flex-col justify-center items-start w-full h-full overflow-y-auto">
                            <img
                                src={selectedCard.image}
                                alt={selectedCard.title}
                                className="w-full h-64 object-contain mb-6 rounded-lg"
                            />
                            <h2 className="text-4xl font-bold mb-4 mt-4">{selectedCard.title}</h2>
                            <p className="text-lg leading-relaxed opacity-90">{selectedCard.description}</p>
                        </div>
                    </div>
                </motion.div>
            )}
            </AnimatePresence>
        </>
    );
};

export default MagicBento;
