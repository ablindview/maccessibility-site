export default function About() {
  return (
    <div className="about-section">
      <div className="about-logo-wrap">
        <img
          src="./logo.svg"
          alt="M12Y Maccessibility logo"
          className="about-logo"
          width="160"
          height="160"
        />
      </div>

      <h1>About Maccessibility</h1>

      <div className="about-card">
        <h2>Our Mission</h2>
        <div className="prose">
          <p>
            Maccessibility is devoted to connecting, compiling, and providing
            easy access to the best resources for blind, visually impaired, and
            other disability groups using Apple products.
          </p>
          <p>
            We deliver news and commentary on Apple and related products in
            relation to accessibility — with a special focus on the needs of
            visually impaired users.
          </p>
        </div>
      </div>

      <div className="about-card">
        <h2>Our History</h2>
        <div className="prose">
          <p>
            The site launched in 2007 as a Lioncourt.com project, originally
            focused on Mac accessibility news and resources for low-vision and
            no-vision users. We also aimed to correct widespread misconceptions
            about Apple product accessibility.
          </p>
          <p>
            Over the years Maccessibility evolved from a news and resource hub
            into primarily a podcast — known as MRTP (Mac Roundtable Podcast)
            — where hosts discuss the latest in Apple accessibility each
            episode.
          </p>
        </div>
      </div>

      <div className="about-card">
        <h2>Our Team</h2>
        <div className="prose">
          <p>
            The site is maintained by a dedicated group of visually impaired
            volunteers who are Apple enthusiasts themselves. Regular hosts
            include Darcy Burnard, Shelly Brisbin, Holly Anderson, Eric Troup,
            and Robert Carter, along with many guest contributors over the
            years.
          </p>
        </div>
      </div>

      <div className="about-card">
        <h2>Support the Show</h2>
        <div className="prose">
          <p>
            Maccessibility is run entirely by volunteers. If you find value in
            the podcast and resources we provide, please consider making a
            contribution to help sustain the site and show.
          </p>
          <p>
            <a
              href="https://maccessibility.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit maccessibility.net
            </a>{' '}
            for more information on how to support us.
          </p>
        </div>
      </div>
    </div>
  )
}
