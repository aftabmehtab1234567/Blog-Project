import React from 'react';
import { Grid } from '@mui/material';
import Banner from '../Bannner/Banner';

import Categories from './Categories';

const Home = () => {
  return (
    <>
      <Banner />
      <Grid container>
        <Grid item lg={2} sm={2} xs={12}>
          <Categories />
        </Grid>
        <Grid item lg={10} sm={10} xs={12}>
          {/* Add your post content here */}
          Post
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
