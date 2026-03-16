import React, { useState } from 'react'

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&display=swap');

  .contact-page { padding: 2.5rem 2rem; }
  .contact-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start; }
  .contact-label { font-family: 'DM Mono', monospace; font-size: 10px; letter-spacing: .14em; text-transform: uppercase; color: #aaa; margin-bottom: .75rem; }
  .contact-heading { font-family: 'DM Serif Display', serif; font-size: clamp(1.6rem, 3.5vw, 2.2rem); line-height: 1.15; margin-bottom: 1rem; }
  .contact-intro p { font-size: 13.5px; line-height: 1.8; color: #666; }
  .contact-links { display: flex; flex-direction: column; border: 0.5px solid #e0e0e0; border-radius: 4px; overflow: hidden; margin-top: 1.5rem; }
  .contact-link { display: flex; justify-content: space-between; align-items: center; padding: 13px 16px; border-bottom: 0.5px solid #e0e0e0; }
  .contact-link:last-child { border-bottom: none; }
  .cl-label { font-family: 'DM Mono', monospace; font-size: 11px; color: #888; letter-spacing: .04em; }
  .cl-val { font-size: 13px; }
  .contact-form { display: flex; flex-direction: column; gap: 12px; }
  .field-wrap { display: flex; flex-direction: column; gap: 5px; }
  .field-label { font-family: 'DM Mono', monospace; font-size: 10px; letter-spacing: .12em; text-transform: uppercase; color: #aaa; }
  .contact-form input, .contact-form textarea { font-family: 'DM Mono', monospace; font-size: 12px; padding: 10px 12px; border: 0.5px solid #ccc; border-radius: 2px; background: #fff; outline: none; transition: border-color .15s; resize: none; width: 100%; }
  .contact-form input:focus, .contact-form textarea:focus { border-color: #999; }
  .send-btn { align-self: flex-start; font-family: 'DM Mono', monospace; font-size: 11px; letter-spacing: .08em; text-transform: lowercase; padding: 10px 18px; background: #111; color: #fff; border: none; border-radius: 2px; cursor: pointer; transition: opacity .15s; }
  .send-btn:hover { opacity: .75; }
  @media (max-width: 560px) { .contact-layout { grid-template-columns: 1fr; } }
`

const contactLinks = [
  { label: 'email', value: 'hello@studio.io' },
  { label: 'twitter', value: '@studio' },
  { label: 'location', value: 'Remote / Lagos' },
]

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', form)
  }

  return (
    <>
      <style>{styles}</style>
      <div className="contact-page">
        <div className="contact-layout">
          <div className="contact-intro">
            <p className="contact-label">Get in touch</p>
            <h2 className="contact-heading">Let's make<br />something.</h2>
            <p>We're open to new projects and conversations. Drop us a line.</p>
            <div className="contact-links">
              {contactLinks.map(({ label, value }) => (
                <div className="contact-link" key={label}>
                  <span className="cl-label">{label}</span>
                  <span className="cl-val">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <p className="contact-label">Send a message</p>
            <div className="field-wrap">
              <span className="field-label">name</span>
              <input type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} />
            </div>
            <div className="field-wrap">
              <span className="field-label">email</span>
              <input type="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} />
            </div>
            <div className="field-wrap">
              <span className="field-label">message</span>
              <textarea name="message" rows={4} placeholder="What's on your mind?" value={form.message} onChange={handleChange} />
            </div>
            <button type="submit" className="send-btn">send →</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact