import './App.css'

function App() {
  const year = new Date().getFullYear()

  return (
    <div className="page-shell">
      <div className="top-ticker">FRESHLY BAKED DAILY • SMALL BATCH • LOCAL FLOUR • CATERING + EVENTS •</div>

      <header className="hero" id="top">
        <nav className="main-nav">
          <p className="brand">Pāka bakehouse</p>
          <ul>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#story">Story</a></li>
            <li><a href="#process">Process</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="hero-copy-full">
          <p className="eyebrow">Artisan Bakery Studio</p>
          <h1>Baking Happiness For Every Heart</h1>
          <p>
            Warm breads, flaky pastries, and custom celebration cakes inspired by
            handcrafted editorial food design.
          </p>
          <div className="hero-actions">
            <a href="#menu" className="btn btn-solid">Order Your Box</a>
            <a href="#story" className="btn btn-outline">See Our Story</a>
          </div>
        </div>
      </header>

      <section className="proof-bar" aria-label="Bakery promises">
        <p>No Artificial Colors</p>
        <p>Pure Butter & Local Dairy</p>
        <p>Made Fresh Daily</p>
        <p>Delivery In 45 Minutes</p>
      </section>

      <section className="story section" id="story">
        <div className="story-copy-full">
          <h2>Sweetness Delivered In Every Box</h2>
          <p>
            Inspired by boutique cafe websites, our menu blends modern design with
            traditional baking. Every box carries fresh sourdough, buttery danish,
            and seasonal specials packed by hand.
          </p>
          <ul>
            <li>Sourdough</li>
            <li>Baguette</li>
            <li>Focaccia</li>
            <li>Signature Croissant</li>
          </ul>
        </div>
      </section>

      <section className="menu section" id="menu">
        <h2>Featured Menu</h2>
        <div className="menu-grid">
          <article className="menu-card">
            <h3>Butter Croissant</h3>
            <p>Shattered layers, cultured butter, baked every morning.</p>
            <span>$4.90</span>
          </article>
          <article className="menu-card accent">
            <h3>Country Sourdough</h3>
            <p>Long fermented 28 hours with crisp caramelized crust.</p>
            <span>$8.50</span>
          </article>
          <article className="menu-card">
            <h3>Celebration Cake</h3>
            <p>Custom frosting, hand piping, and premium fillings.</p>
            <span>From $42</span>
          </article>
        </div>
      </section>

      <section className="process section" id="process">
        <h2>From Dough To Delight</h2>
        <div className="process-grid">
          <article className="process-step">
            <p className="step">Step 1</p>
            <h3>Mix</h3>
            <p>Carefully blend flour, water, salt, and time to create the perfect dough.</p>
          </article>
          <article className="process-step">
            <p className="step">Step 2</p>
            <h3>Bake</h3>
            <p>Low and slow in our stone oven for perfect crust and tender crumb.</p>
          </article>
          <article className="process-step">
            <p className="step">Step 3</p>
            <h3>Serve</h3>
            <p>Enjoy warm from the oven with butter and your favorite toppings.</p>
          </article>
        </div>
      </section>

      <section className="contact section" id="contact">
        <h2>Visit pāka bakehouse</h2>
        <p>123 Market Street, Downtown</p>
        <p>(555) 234-8910</p>
        <p>hello@pakabakehouse.com</p>
      </section>

      <footer>
        <p>© {year} pāka bakehouse</p>
      </footer>
    </div>
  )
}

export default App
