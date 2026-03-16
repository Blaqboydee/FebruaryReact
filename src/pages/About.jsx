import React from 'react'

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&display=swap');

  .about-page { padding: 2.5rem 2rem; }
  .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start; }
  .about-label { font-family: 'DM Mono', monospace; font-size: 10px; letter-spacing: .14em; text-transform: uppercase; color: #aaa; margin-bottom: .75rem; }
  .about-heading { font-family: 'DM Serif Display', serif; font-size: clamp(1.6rem, 3.5vw, 2.2rem); line-height: 1.15; margin-bottom: 1.25rem; }
  .about-body { font-size: 13.5px; line-height: 1.8; color: #666; }
  .about-stats { display: flex; flex-direction: column; gap: 1px; border: 0.5px solid #e0e0e0; border-radius: 4px; overflow: hidden; margin-top: .5rem; }
  .stat-row { display: flex; justify-content: space-between; align-items: baseline; padding: 14px 16px; border-bottom: 0.5px solid #e0e0e0; }
  .stat-row:last-child { border-bottom: none; }
  .stat-label { font-family: 'DM Mono', monospace; font-size: 11px; color: #888; letter-spacing: .04em; }
  .stat-val { font-family: 'DM Serif Display', serif; font-size: 1.5rem; }
  @media (max-width: 560px) { .about-grid { grid-template-columns: 1fr; } }
`

const stats = [
  { label: 'projects shipped', value: '48' },
  { label: 'years running', value: '6' },
  { label: 'team size', value: '4' },
  { label: 'cups of coffee', value: '∞' },
]

const About = () => {
  return (
    <>
      <style>{styles}</style>
      <div className="about-page">
        <div className="about-grid">
          <div>
            <p className="about-label">About us</p>
            <h2 className="about-heading">Minimal tools.<br />Maximum clarity.</h2>
            <p className="about-body">
              We believe good design disappears. It gets out of the way and lets the work speak.
              Our process is slow, deliberate, and built around what actually matters to the people using it.
            </p>
          </div>
          <div>
            <p className="about-label">By the numbers</p>
            <div className="about-stats">
              {stats.map(({ label, value }) => (
                <div className="stat-row" key={label}>
                  <span className="stat-label">{label}</span>
                  <span className="stat-val">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About