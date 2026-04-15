export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>
          &copy; 2007&ndash;{new Date().getFullYear()} Maccessibility (M12Y).
          All rights reserved.
        </p>
        <p>
          <a
            href="https://maccessibility.net/feed-podcast.rss"
            target="_blank"
            rel="noopener noreferrer"
          >
            Podcast RSS Feed
          </a>
          {' · '}
          <a
            href="https://twitter.com/Maccessibility"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Maccessibility on Twitter
          </a>
        </p>
      </div>
    </footer>
  )
}
