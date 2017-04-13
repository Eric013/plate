import { compose, graphql } from 'react-apollo';

import Header from '../components/PlateFiller/Header';
import PropTypes from 'prop-types';
import React from 'react';
import TextEditor from '../components/TextEditor/TextEditor';
import { getPlateData } from '../queries/plateFillerQueries';
import { savePlateContentMutation } from '../mutations/plateFillerMutations';

const PlateFillerContainer = ({ plateId, savePlateContent, plate }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-sm-12 col-md-12 col-lg-12"
          style={{ width: '100%' }}
        >
          <Header plateName={plate.name} />
          <TextEditor
            saveContent={savePlateContent}
            plateContent={plate.content}
            plateId={plateId}
          />
        </div>
      </div>
    </div>
  );
};

PlateFillerContainer.propTypes = {
  plateId: PropTypes.string,
  savePlateContent: PropTypes.func,
  plate: PropTypes.object
};

export default compose(
  graphql(savePlateContentMutation, {
    props: ({ mutate }) => ({
      savePlateContent: (id, content) => mutate({ variables: { id, content } })
    })
  }),
  graphql(getPlateData, {
    props: ({ data: { loading, plate } }) => ({
      loading,
      plate
    }),
    options: ({ plateId }) => ({
      variables: { id: plateId }
    })
  })
)(PlateFillerContainer);