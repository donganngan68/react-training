import React from 'react';
import {
  Box, Grid, GridItem,
} from '@chakra-ui/react';

// ProductCardItem component
import ProductCardItem from '../ProductCardItem';

// Data
import data from '../../constants/product-card-item';

export default function ProductCard() {
  return (
    <Box>
      <Grid templateColumns="repeat(4, 1fr)" gridColumnGap="5" gridRowGap="6">
        {data.map((product) => (
          <GridItem>
            <ProductCardItem product={product} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}