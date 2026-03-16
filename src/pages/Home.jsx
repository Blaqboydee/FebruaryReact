import React from 'react' 
import { Link } from 'react-router-dom'

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&display=swap');

  .home-page { padding: 2.5rem 2rem; font-family: sans-serif; }
  .home-eyebrow { font-family: 'DM Mono', monospace; font-size: 11px; letter-spacing: .12em; text-transform: uppercase; color: #888; margin-bottom: 1rem; display: block; }
  .home-title { font-family: 'DM Serif Display', serif; font-size: clamp(2rem, 5vw, 3rem); line-height: 1.1; font-style: italic; margin-bottom: 1.25rem; }
  .home-sub { font-size: 14px; line-height: 1.7; color: #666; max-width: 380px; margin-bottom: 1.5rem; }
  .home-cta { display: inline-flex; align-items: center; gap: 8px; font-family: 'DM Mono', monospace; font-size: 12px; letter-spacing: .06em; text-transform: lowercase; border: 0.5px solid #ccc; padding: 10px 18px; border-radius: 2px; cursor: pointer; background: none; transition: background .15s; }
  .home-cta:hover { background: #f5f5f5; }
` 

const students = ["ayo", "ife", "caro", "hikmat"]

const Home = () => {
  return (
    <>
      <style>{styles}</style>
      <div className="home-page">
        <span className="home-eyebrow">Studio — est. 2024</span>
        <h1 className="home-title">We craft things<br />that last.</h1>
        <p className="home-sub">A small team making thoughtful digital products. Less noise, more intention.</p>
        <button className="home-cta">learn more →</button>

      

        {students.map((student, id)=>
        <Link to={`/details/${id}`}>Details of {student}</Link>
        )}

      </div>
    </>
  )
}

export default Home