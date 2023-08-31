import React from 'react';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
// icons
import { Icon } from '@iconify/react';
// @mui
import { Box } from '@mui/material';

class Iconify extends React.Component {
  render() {
    const { icon, width = 20, sx, ...other } = this.props;
    return (
      <Box
        ref={this.props.forwardedRef}
        component={Icon}
        icon={icon}
        sx={{ width, height: width, ...sx }}
        {...other}
      />
    );
  }
}

Iconify.propTypes = {
  sx: PropTypes.object,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  forwardedRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

export default forwardRef((props, ref) => <Iconify {...props} forwardedRef={ref} />);
