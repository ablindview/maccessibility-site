export default function EpisodeCard({ episode }) {
  const { number, title, date, hosts, topics } = episode
  return (
    <article className="episode-card" aria-labelledby={`ep-${number}-title`}>
      <div className="episode-meta">
        <span>Episode {number}</span>
        <span className="episode-dot" aria-hidden="true">·</span>
        <time dateTime={date.iso}>{date.display}</time>
      </div>
      <h3 id={`ep-${number}-title`} className="episode-title">
        MRTP {number}: {title}
      </h3>
      <p className="episode-hosts">
        <span className="sr-only">Hosts: </span>
        {hosts.join(', ')}
      </p>
      <p className="episode-topics">{topics}</p>
    </article>
  )
}
