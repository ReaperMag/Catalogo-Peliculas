type PlaceholderSectionProps = {
  title: string
  description: string
  slots: string[]
}

export function PlaceholderSection({ title, description, slots }: PlaceholderSectionProps) {
  return (
    <section className="placeholder-section">
      <div>
        <span className="eyebrow">Información</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className="placeholder-grid">
        {slots.map((slot) => (
          <div className="placeholder-card" key={slot}>
            <span>{slot}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
