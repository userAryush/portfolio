function About() {
  return (
    <section className="about-section page-section" id="about">
      <p className="eyebrow">How I build with MERN</p>
      <div className="about-grid">
        <h2>I build clean full-stack products with the <em>MERN stack.</em></h2>
        <div className="about-copy">
          <p>MERN stands for MongoDB, Express, React, and Node.js: four technologies that work together to build modern web applications.</p>
          <p>MongoDB stores the data, Express and Node.js power the server, and React creates the interface you use. I connect each layer into one simple, useful experience.</p>
          <a className="arrow-link" href="#contact">More about me <span>↘</span></a>
        </div>
      </div>
    </section>
  )
}

export default About