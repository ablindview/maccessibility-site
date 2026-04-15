import { useState } from 'react'

export default function Contact() {
  const [fields, setFields] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  function validate() {
    const errs = {}
    if (!fields.name.trim()) errs.name = 'Name is required.'
    if (!fields.email.trim()) {
      errs.email = 'Email address is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      errs.email = 'Please enter a valid email address.'
    }
    if (!fields.message.trim()) errs.message = 'Message is required.'
    return errs
  }

  function handleChange(e) {
    const { name, value } = e.target
    setFields((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="contact-grid">
        <h1>Contact Us</h1>
        <div
          className="contact-card"
          role="alert"
          aria-live="polite"
          aria-atomic="true"
        >
          <h2>Message Sent!</h2>
          <p>
            Thank you, {fields.name}. We&rsquo;ll be in touch at{' '}
            <strong>{fields.email}</strong>.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="contact-grid">
      <h1>Contact Us</h1>

      <div className="contact-card">
        <h2>Send a Message</h2>
        <form
          onSubmit={handleSubmit}
          noValidate
          aria-label="Contact form"
        >
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={fields.name}
              onChange={handleChange}
              aria-required="true"
              aria-describedby={errors.name ? 'name-error' : undefined}
              aria-invalid={errors.name ? 'true' : undefined}
            />
            {errors.name && (
              <span id="name-error" role="alert" style={{ color: 'var(--color-link)', fontSize: '0.875rem' }}>
                {errors.name}
              </span>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={fields.email}
              onChange={handleChange}
              aria-required="true"
              aria-describedby={errors.email ? 'email-error' : undefined}
              aria-invalid={errors.email ? 'true' : undefined}
            />
            {errors.email && (
              <span id="email-error" role="alert" style={{ color: 'var(--color-link)', fontSize: '0.875rem' }}>
                {errors.email}
              </span>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={fields.message}
              onChange={handleChange}
              aria-required="true"
              aria-describedby={errors.message ? 'message-error' : undefined}
              aria-invalid={errors.message ? 'true' : undefined}
            />
            {errors.message && (
              <span id="message-error" role="alert" style={{ color: 'var(--color-link)', fontSize: '0.875rem' }}>
                {errors.message}
              </span>
            )}
          </div>

          <p className="form-note">
            We do not share your information with third parties.
          </p>

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>

      <div className="contact-card">
        <h2>Connect with Us</h2>
        <ul className="social-list" role="list">
          <li>
            Follow{' '}
            <a
              href="https://twitter.com/Maccessibility"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow @Maccessibility on Twitter (opens in new tab)"
            >
              @Maccessibility
            </a>{' '}
            on Twitter
          </li>
          <li>
            Use hashtag{' '}
            <a
              href="https://twitter.com/hashtag/VOLive"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tweets tagged with #VOLive (opens in new tab)"
            >
              #VOLive
            </a>{' '}
            to join live discussions
          </li>
          <li>
            Join the{' '}
            <a
              href="https://maccessibility.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              MacVisionaries
            </a>{' '}
            community group
          </li>
          <li>
            Join the{' '}
            <a
              href="https://maccessibility.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              VIPhone
            </a>{' '}
            community group
          </li>
          <li>
            Subscribe to the{' '}
            <a
              href="https://maccessibility.net/feed-podcast.rss"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Podcast RSS feed (opens in new tab)"
            >
              Podcast RSS Feed
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
