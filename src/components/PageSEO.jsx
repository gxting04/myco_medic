import { useEffect } from 'react'
import { applySEO } from '@/utils/seo'

function PageSEO(props) {
  const jsonLdKey = props.jsonLd ? JSON.stringify(props.jsonLd) : ''

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
