import PlateFiller from '../views/PlateFiller'
import React from 'react'
import Unauthorized from '../components/Unauthorized/Unauthorized'
import { pageWithUserData } from '../hocs/page'

export default pageWithUserData(({ url, ...props }) => {
  if (!props.token) {
    return (
      <div>
        <Unauthorized />
      </div>
    )
  }
  return <PlateFiller plateId={url.query.id} />
})
