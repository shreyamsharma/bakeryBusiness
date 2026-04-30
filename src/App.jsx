import './App.css'

function App() {
  const year = new Date().getFullYear()

  return (
    <>
      <header className="hero">
        <p className="eyebrow">Fresh Every Morning</p>
        <h1>Sunrise Bakery</h1>
        <p className="hero-copy">
          Handcrafted breads, celebration cakes, and buttery pastries made daily
          with local ingredients.
        </p>
        <div className="hero-actions">
          <a href="#menu" className="btn btn-primary">View Menu</a>
          <a href="#contact" className="btn btn-secondary">Order Now</a>
        </div>
      </header>

      <section className="section" id="menu">
        <h2>Popular Bakes</h2>
        <div className="grid">
          <article className="card">
            <h3>Sourdough Loaf</h3>
            <p>Long-fermented, crackling crust, naturally leavened.</p>
            <span>$8</span>
          </article>
          <article className="card">
            <h3>Chocolate Croissant</h3>
            <p>Flaky laminated dough with rich dark chocolate center.</p>
            <span>$5</span>
          </article>
          <article className="card">
            <h3>Custom Birthday Cake</h3>
            <p>Choose flavor, size, and design for your big day.</p>
            <span>From $45</span>
          </article>
        </div>
      </section>

      <section className="section highlight">
        <h2>Why Customers Love Us</h2>
        <p>
          Family-owned, small-batch baking and same-day pickup options for
          bread, pastries, and events.
        </p>
        <ul>
          <li>Open 6:30 AM to 7:00 PM, 7 days a week</li>
          <li>Free delivery on orders over $35</li>
          <li>Wedding and catering packages available</li>
        </ul>
      </section>

      <section className="section contact" id="contact">
        <h2>Visit or Call</h2>
        <p>123 Market Street, Downtown</p>
        <p>(555) 234-8910</p>
        <p>hello@sunrisebakery.com</p>
      </section>

      <footer>
        <p>© {year} Sunrise Bakery. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
