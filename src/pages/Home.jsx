import { Link } from 'react-router-dom'
import EpisodeCard from '../components/EpisodeCard'

const episodes = [
  {
    number: 297,
    title: "Triple Tap Is Your Friend",
    date: { iso: "2026-04-05", display: "April 5, 2026" },
    hosts: ["Darcy Burnard", "Shelly Brisbin", "Eric Troup"],
    topics:
      "Apple's 50th anniversary, Mac Pro discontinuation, AirPods Max updates, and highlights from the CSUN assistive technology conference.",
  },
  {
    number: 296,
    title: "Sighted People, Am I Right?",
    date: { iso: "2026-03-08", display: "March 8, 2026" },
    hosts: ["Darcy Burnard", "Holly Anderson", "Shelly Brisbin"],
    topics:
      "A Josh update, new Apple product announcements, and resources for the disability community.",
  },
  {
    number: 295,
    title: "M5s for Everybody",
    date: { iso: "2026-02-22", display: "February 22, 2026" },
    hosts: ["Darcy Burnard", "Holly Anderson", "Shelly Brisbin", "Robert Carter"],
    topics:
      "Olympic audio description, March event speculation, Claude AI, Podtrak P4 Next, Mac Spotlight improvements, Sign in with Apple, and VoiceOver cursor issues.",
  },
  {
    number: 294,
    title: "The Dreaded Scroll Area",
    date: { iso: "2026-02-08", display: "February 8, 2026" },
    hosts: ["Darcy Burnard", "Holly Anderson", "Shelly Brisbin"],
    topics:
      "New AirTags, sports accessibility, dual-booting, the Sudoku Blind app, and Apple TV shows.",
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero" aria-label="Welcome to Maccessibility">
        <img
          src="./logo.svg"
          alt="M12Y Maccessibility logo"
          className="hero-logo"
          width="140"
          height="140"
        />
        <h1>Maccessibility</h1>
        <p className="hero-tagline">
          News and commentary on Apple products and accessibility — especially
          for blind and visually impaired users. Hosted by a dedicated group of
          visually impaired Apple enthusiasts since 2007.
        </p>
        <div className="hero-actions">
          <a
            href="https://maccessibility.net/feed-podcast.rss"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Subscribe to Podcast
          </a>
          <Link to="/about" className="btn btn-outline">
            About the Show
          </Link>
        </div>
      </section>

      <hr className="divider" />

      {/* Recent episodes */}
      <section aria-labelledby="recent-episodes-heading">
        <h2 id="recent-episodes-heading" className="section-heading">
          Recent Episodes
        </h2>
        <div className="episodes-list">
          {episodes.map((ep) => (
            <EpisodeCard key={ep.number} episode={ep} />
          ))}
        </div>
      </section>
    </>
  )
}
