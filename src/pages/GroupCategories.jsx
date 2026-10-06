import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Data from '../shared/Data'
import slugify from '../utils/slugify'

/**
 * Legacy /products/group/:groupName URLs. The catalogue page now handles
 * group views (with search, sorting and category drill-down), so these
 * forward there instead of maintaining a second, thinner listing.
 */
function GroupCategories() {
  const { groupName = '' } = useParams()
  const input = decodeURIComponent(groupName).toLowerCase()
  const group = Data.productGroups.find(
    (g) => slugify(g.name) === slugify(input) || g.name.toLowerCase() === input || g.name.toLowerCase().replace(/\s+/g, '-') === input
  )
  return <Navigate to={group ? `/products?groupId=${group.id}` : '/products'} replace />
}

export default GroupCategories
