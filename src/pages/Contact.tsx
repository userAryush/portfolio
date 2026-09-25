import { type FormEvent } from 'react'

function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') || '')
    const email = String(formData.get('email') || '')
    const message = String(formData.get('message') || '')
    const subject = encodeURIComponent(`Project inquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:ronitkhadka4@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section className="contact-section page-section" id="contact">
      <p className="eyebrow">Have a MERN project in mind?</p>
      <div className="contact-layout">
        <div className="contact-intro">
          <h2>Let&apos;s make it <em>real.</em></h2>
          <a className="email-link" href="mailto:ronitkhadka4@gmail.com">ronitkhadka4@gmail.com <span>↗</span></a>
          <div className="contact-details">
            <p><strong>Connect</strong> Working worldwide</p>
            <p><strong>Status</strong> Available for work</p>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" placeholder="Jane Smith" required type="text" />
          <label htmlFor="email">Email address</label>
          <input id="email" name="email" placeholder="jane@company.com" required type="email" />
          <label htmlFor="message">Tell me a little about it</label>
          <textarea id="message" name="message" placeholder="What are you working on?" required rows={4} />
          <button type="submit">Send inquiry <span>↗</span></button>
        </form>
      </div>
      <div className="contact-footer">
        <p>© Ronit Khadka</p>
        <div className="social-links"><a href="https://www.linkedin.com/in/ronit-khadka-465562350" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/Ronit-9" target="_blank" rel="noreferrer">GitHub</a></div>
      </div>
    </section>
  )
}

export default Contact