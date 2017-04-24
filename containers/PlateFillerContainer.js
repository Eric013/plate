import { compose, graphql } from 'react-apollo'

import ContentEditor from '../components/PlateFiller/ContentEditor'
import Header from '../components/PlateFiller/Header'
import Loader from '../components/Loader/Loader'
import PlateQuery from '../queries/PlateQuery'
import PropTypes from 'prop-types'
import React from 'react'
import SavePlateContentMutation from '../mutations/SavePlateContentMutation'

const PlateFillerContainer = ({
  plateId,
  savePlateContent,
  plate,
  loading
}) => {
  if (loading) {
    return <Loader />
  }
  return (
    <div className="container-fluid bottom-margin">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12 full-width">
          <Header plateName={plate.name} />
          <ContentEditor
            saveContent={savePlateContent}
            plateContent={plate.content}
            plateId={plateId}
          />
        </div>
      </div>
      <style jsx>
        {`
          .bottom-margin {
            margin-bottom: 50px;
          }
          .full-width {
            width: 100%;
          }
        `}
      </style>
    </div>
  )
}

PlateFillerContainer.propTypes = {
  plateId: PropTypes.string,
  savePlateContent: PropTypes.func,
  plate: PropTypes.object,
  loading: PropTypes.bool
}

export default compose(
  graphql(SavePlateContentMutation, {
    props: ({ mutate }) => ({
      savePlateContent: (id, content) => mutate({ variables: { id, content } })
    }),
    options: ({ plateId }) => ({
      refetchQueries: [
        {
          query: PlateQuery,
          variables: { id: plateId }
        }
      ],
      fetchPolicy: 'cache-and-network'
    })
  }),
  graphql(PlateQuery, {
    props: ({ data: { loading, plate } }) => ({
      loading,
      plate
    }),
    options: ({ plateId }) => ({
      variables: { id: plateId },
      fetchPolicy: 'cache-and-network'
    })
  })
)(PlateFillerContainer)
