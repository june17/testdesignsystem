import React from 'react';
import { Grid, Box } from '@material-ui/core'
import Header from './components/Header'
import Content from './components/Content'

function App() {
  return (
    <Grid container direction='column'>
      <Grid item container>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item sm={2} xs={false} />
        <Grid item sm={8} xs={12} background="red">
          <Box mt={2} >
            <Content />
          </Box>
        </Grid>
        <Grid item sm={2} xs={false} />
      </Grid>
    </Grid>
  );
}

export default App;
