const imageModules = import.meta.glob('../assets/images/**/*.{png,jpg,jpeg,webp,avif,svg}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

export function getMediaImage(imagePath: string) {
  if (!imagePath) return ''
  if (/^https?:\/\//i.test(imagePath)) return imagePath

  const normalizedPath = imagePath.replaceAll('\\', '/').replace(/^\/+/, '')
  return imageModules[`../assets/images/${normalizedPath}`] ?? ''
}
