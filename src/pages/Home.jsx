import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import cremeCaramel from '../assets/shreya-creme-caramel.png'
import eclair from '../assets/shreya-eclair.png'
import imgCremeCaramel from '../assets/creme-caramel.png'
import imgBlackForest from '../assets/black-forest.png'
import imgEclairs from '../assets/eclairs-2.png'
import imgPBCookies from '../assets/peanut-butter-cookies.jpg'
import imgChocChip from '../assets/choclate-chip-cookie.png'
import imgSmores from '../assets/cookies.png'
import imgApplePie from '../assets/apple-pie.png'
import imgBananaMuffins from '../assets/choclate-banana-muffins.png'
import imgPullApart from '../assets/sourdough-bread-loaf.png'
import imgGarlicKnots from '../assets/dinner-rolls.png'

const carouselItems = [
  { label: 'Crème Caramel',          tag: 'Dessert', bg: '#C4845A', img: imgCremeCaramel },
  { label: 'Black Forest Cake',      tag: 'Cake',    bg: '#3B2A2A', img: imgBlackForest },
  { label: 'Éclairs',                tag: 'Pastry',  bg: '#6B5044', img: imgEclairs },
  { label: 'Peanut Butter Cookies',  tag: 'Cookie',  bg: '#C8A96E', img: imgPBCookies },
  { label: 'Chocolate Chip Cookies', tag: 'Cookie',  bg: '#7B4F2E', img: imgChocChip },
  { label: 'Butter Cookies',          tag: 'Cookie',  bg: '#4A3728', img: imgSmores },
  { label: 'Apple Pie',              tag: 'Pie',     bg: '#B87040', img: imgApplePie },
  { label: 'Banana Choc Muffins',    tag: 'Muffin',  bg: '#5C4033', img: imgBananaMuffins },
  { label: 'White Loaf',             tag: 'Bread',   bg: '#C4A040', img: imgPullApart },
  { label: 'Dinner Rolls',           tag: 'Bread',   bg: '#A08050', img: imgGarlicKnots },
]

const VISIBLE = 4

export default function Home() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (paused) return
    intervalRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % carouselItems.length)
    }, 2800)
    return () => clearInterval(intervalRef.current)
  }, [paused])

  const go = (dir) => {
    clearInterval(intervalRef.current)
    setPaused(true)
    setCurrent(c => (c + dir + carouselItems.length) % carouselItems.length)
    setTimeout(() => setPaused(false), 4000)
  }

  const visibleItems = Array.from({ length: VISIBLE }, (_, i) =>
    carouselItems[(current + i) % carouselItems.length]
  )

  return (
    <>
      {/* Hero */}
      <header className="hero" id="top">
        <p className="hero-estd">ESTD · 2026 · CANADA</p>
        <div className="hero-emblem">
          <span className="hero-name">Pāka</span>
          <span className="hero-sub">Bakehouse</span>
        </div>
        <p className="hero-tagline">Small-batch · Baked fresh · Made with love</p>
        <div className="hero-actions">
          <Link to="/recipes" className="btn-cream">See Recipes</Link>
          <Link to="/connect" className="btn-ghost">Follow Along</Link>
        </div>
      </header>

      {/* Checker + Ticker */}
      <div className="checker-bar" aria-hidden="true"></div>
      <div className="ticker-wrap">
        <div className="ticker-track">
          <span>FRESHLY BAKED</span><span className="t-dot">✦</span>
          <span>SMALL BATCH</span><span className="t-dot">✦</span>
          <span>BAKED WITH FRESHNESS</span><span className="t-dot">✦</span>
          <span>LOCAL INGREDIENTS</span><span className="t-dot">✦</span>
          <span>MADE WITH LOVE</span><span className="t-dot">✦</span>
          <span>MADE FROM SCRATCH</span><span className="t-dot">✦</span>
          <span>FRESHLY BAKED</span><span className="t-dot">✦</span>
          <span>SMALL BATCH</span><span className="t-dot">✦</span>
          <span>BAKED WITH FRESHNESS</span><span className="t-dot">✦</span>
          <span>LOCAL INGREDIENTS</span><span className="t-dot">✦</span>
          <span>MADE WITH LOVE</span><span className="t-dot">✦</span>
          <span>MADE FROM SCRATCH</span><span className="t-dot">✦</span>
        </div>
      </div>
      <div className="checker-bar checker-bar--flipped" aria-hidden="true"></div>

      {/* Food Carousel */}
      <section className="carousel-section">
        <div className="section-inner">
          <div className="carousel-header">
            <div>
              <p className="eyebrow">What Comes Out of the Oven</p>
              <h2 className="carousel-title">The Bakes</h2>
            </div>
            <div className="carousel-controls">
              <button className="carousel-btn" onClick={() => go(-1)} aria-label="Previous">←</button>
              <button className="carousel-btn" onClick={() => go(1)} aria-label="Next">→</button>
            </div>
          </div>
          <div className="carousel-track">
            {visibleItems.map((item, i) => (
              <div key={item.label + i} className="carousel-card" style={{ background: item.bg }}>
                <img src={item.img} alt={item.label} className="carousel-card-img" />
                <div className="carousel-card-inner">
                  <span className="carousel-tag">{item.tag}</span>
                  <p className="carousel-label">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="carousel-dots">
            {carouselItems.map((_, i) => (
              <button
                key={i}
                className={'carousel-dot' + (i === current ? ' active' : '')}
                onClick={() => { clearInterval(intervalRef.current); setPaused(true); setCurrent(i); setTimeout(() => setPaused(false), 4000) }}
                aria-label={'Slide ' + (i + 1)}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="checker-bar" aria-hidden="true"></div>

      {/* About — photos left and right of text */}
      <section className="section about-section" id="about">
        <div className="section-inner about-layout-photos">

          <div className="about-photo-side">
            <img src={cremeCaramel} alt="Shreya presenting crème caramel" className="about-side-img" />
          </div>

          <div className="about-copy">
            <p className="eyebrow">The Baker</p>
            <h2>Hi, I&apos;m Shreya :)</h2>

            <p>If you&apos;re wondering why I started Pāka Bakehouse, let me take you back to a time long long ago and a land far far away, before I became a coffee-fuelled, bug-fixing software engineer in Canada&hellip;</p>

            <p>Now imagine an Indian household where the kitchen is led by my granny, my Ajji. Cute, wholesome, aromatic and aesthetic right? Yes, but also hot, loud and dare I say, rather chaotic. No one messes with my Ajji but if you bat your eyes one too many times, maybe she might just let you steal a bite out of whatever soul-comforting food she&apos;s cooking.</p>

            <p>Now you know where I get my love for feeding people from, but what it also brings with it is a kitchen that&apos;s a riot with flour everywhere, the oven always housing something in it and me trying &ldquo;just one thing&rdquo; and somehow making three.</p>

            <p>So, Pāka Bakehouse isn&apos;t just an attempt to fill a void in my rather monotonous corporate life. It&apos;s an attempt to make things I care about, the things that reminds you of simpler times and just take a moment to appreciate life.</p>

            <p className="story-highlight">&ldquo;Pāka&rdquo; is a Kannada word. It&apos;s that stage in sweets where everything just comes together. You can&apos;t rush it, you just kind of learn the feel of it.</p>

            <p>Much like the essence of &ldquo;Pāka&rdquo;, with a collection of simple feel-good desserts, we attempt to create a moment where you let yourself hold on a bit longer, to a feeling you don't want to lose. </p>

            <p className="story-closing">The hope is to let you hold on to a feeling you don&apos;t want to lose, a bit longer and say &ldquo;hmm damn this is really good&rdquo;.</p>
          </div>

          <div className="about-photo-side">
            <img src={eclair} alt="Shreya with éclairs and choux pastry" className="about-side-img" />
          </div>

        </div>
      </section>
    </>
  )
}
