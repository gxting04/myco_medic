export default function slugify(value = '') {
  return value
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
}

export function normalizeSlug(slug) {
  if (!slug) return ''
  // Handle cases where '/' became a separate hyphen due to different slugification logic
  // "critical-care/-day-care" -> "critical-care-day-care"
  return slug.replace(/-+/g, '-').replace(/(^-|-$)+/g, '')
}
