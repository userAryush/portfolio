import '../styles/contact.css'
import { type FormEvent } from 'react'

function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget

    const formData = new FormData(form)
    const name = String(formData.get('name') || '')
    const email = String(formData.get('email') || '')
    const message = String(formData.get('message') || '')

    const subject = `Portfolio inquiry from ${name}`
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    const outlookUrl = `https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent('khatriaryush@gmail.com')}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.open(outlookUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="contact-section page-section" id="contact">
      <p className="eyebrow">Have a project in mind?</p>
      <div className="contact-layout">
        <div className="contact-intro">
          <div className="section-heading">
            <h2>
              Let&apos;s make it <em>real.</em>
              <span aria-hidden="true" className="work-heading-arrow">
                ↗
              </span>
            </h2>
          </div>
          <a
            className="email-link"
            href="https://outlook.office.com/mail/deeplink/compose?to=khatriaryush%40gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            khatriaryush@gmail.com <span>↗</span>
          </a>
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
          <button type="submit">
            <span>Send inquiry</span>
            <span>↗</span>
          </button>
        </form>
      </div>
      <div className="contact-footer">
        <p>© Aryush Khatri</p>
        <div className="social-links">
          <a href="https://linkedin.com/in/aryush-khatri" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/userAryush" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  )
}

export default Contact