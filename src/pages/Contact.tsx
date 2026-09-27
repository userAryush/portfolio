import '../styles/contact.css'
import { type FormEvent, useState } from 'react'

function Contact() {
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') || '')
    const email = String(formData.get('email') || '')
    const message = String(formData.get('message') || '')
    const subject = encodeURIComponent(`Project inquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)

    // Simulate loading delay
    setTimeout(() => {
      window.location.href = `mailto:khatriaryush@gmail.com?subject=${subject}&body=${body}`
      setIsLoading(false)
      setShowSuccess(true)

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false)
      }, 5000)
    }, 1000)
  }

  return (
    <section className="contact-section page-section" id="contact">
      <p className="eyebrow">Have a Django or REST API project in mind?</p>
      <div className="contact-layout">
        <div className="contact-intro">
          <h2>Let&apos;s make it <em>real.</em></h2>
          <a className="email-link" href="mailto:YOUR_EMAIL_HERE@example.com">khatriaryush@gmail.com <span>↗</span></a>
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
          <button type="submit" disabled={isLoading}>
            {isLoading ? (
              <>
                <span>Sending...</span>
                <span className="loading-spinner">⏳</span>
              </>
            ) : (
              <>
                <span>Send inquiry</span>
                <span>↗</span>
              </>
            )}
          </button>
          {showSuccess && (
            <div className="success-message">
              <span>✓</span> Inquiry sent successfully!
            </div>
          )}
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