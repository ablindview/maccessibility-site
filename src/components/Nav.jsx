import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="site-nav" aria-label="Main navigation">
      <div className="nav-inner">
        <NavLink to="/" className="nav-brand" aria-label="M12Y Maccessibility – home">
          <img
            src="./logo.svg"
            alt=""
            aria-hidden="true"
            width="40"
            height="40"
          />
          M12Y
        </NavLink>
        <ul className="nav-links" role="list">
          <li>
            <NavLink
              to="/"
              end
              aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <a
              href="https://maccessibility.net/feed-podcast.rss"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Podcast RSS feed (opens in new tab)"
            >
              RSS Feed
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
