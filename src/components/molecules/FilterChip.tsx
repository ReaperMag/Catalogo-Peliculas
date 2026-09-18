type FilterChipProps = {
  label: string
  active?: boolean
}

export function FilterChip({ active = false, label }: FilterChipProps) {
  return (
    <button className={active ? 'filter-chip filter-chip--active' : 'filter-chip'} type="button">
      {label}
    </button>
  )
}
