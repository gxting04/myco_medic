import { useContext, useEffect } from 'react'
import { SeoCollectorContext, applySEO } from '@/utils/seo'

function PageSEO(props) {
  const collector = useContext(SeoCollectorContext)
  const jsonLdKey = props.jsonLd ? JSON.stringify(props.jsonLd) : ''

  // Build-time prerender: effects don't run there, so record the props for
  // scripts/prerender.mjs to turn into the static <head>.
  if (collector) collector.props = props

  useEffect(() => {
    applySEO(props)
  }, [
    props.title,
    props.description,
    props.path,
    props.image,
    props.type,
    props.noindex,
    jsonLdKey
  ])

  return null
}

export default PageSEO
