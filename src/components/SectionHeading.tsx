export function SectionHeading({ index, eyebrow, title, description }: { index?: string; eyebrow: string; title: string; description?: string }) {
  return (
    <div className="section-heading">
      <div className="section-kicker">
        {index && <span>{index}</span>}
        <span>{eyebrow}</span>
      </div>
      <div className="max-w-3xl">
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </div>
  )
}
