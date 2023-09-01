import React, { Component } from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
// import Title from './Title';

class Deposits extends Component {
  preventDefault(event) {
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <Title>Recent Deposits</Title>
        <Typography component="p" variant="h4">
          $3,024.00
        </Typography>
        <Typography color="text.secondary" sx={{ flex: 1 }}>
          on 15 March, 2019
        </Typography>
        <div>
          <Link color="primary" href="#" onClick={this.preventDefault}>
            View balance
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default Deposits;
