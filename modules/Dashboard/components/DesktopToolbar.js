import React, { PropTypes } from 'react';
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle,
} from 'material-ui/Toolbar';

import RaisedButton from 'material-ui/RaisedButton';
import Router from 'next/router';

const DesktopToolbar = () => {
  return (
    <div className="toolbar-desktop">
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text="Manage Plates" />
        </ToolbarGroup>
        <ToolbarGroup />
        <ToolbarGroup>
          <ToolbarSeparator />
          <RaisedButton
            primary
            label="Create Plate"
            onTouchTap={() => Router.push('/addPlate')}
          />
        </ToolbarGroup>
      </Toolbar>
      <style jsx>
        {
          `
          @media only screen
            and (min-device-width : 320px)
            and (max-device-width : 600px) {
              .toolbar-desktop {
                display: none;
              }
            }
          `
        }
      </style>
    </div>
  );
};

DesktopToolbar.propTypes = {
  openCreatePlateDialog: PropTypes.func
};

export default DesktopToolbar;
