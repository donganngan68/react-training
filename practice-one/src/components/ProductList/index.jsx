import React from 'react';
import {
  Box, Button, Input, Text, Flex,
} from '@chakra-ui/react';

// ProductCardTable component
import ProductCardTable from '../ProductCardTable';

export default function ProductList() {
  return (
    <Box px="36" pt="24">
      <Box textAlign="center" pb="10">
        <Text fontSize="xs" color="primary" fontWeight="semibold" textTransform="uppercase">Top Selling</Text>
        <Text fontSize="2md" fontWeight="bold">Best Weekend Sellers</Text>
      </Box>
      <Flex justify-content="space-between" pb="10">
        <Input w="96" placeholder="Searching" border="none" borderRadius="1.5" background="#f5f5f5" />
        <Button variant="solid">Add New Product</Button>
      </Flex>
      <ProductCardTable />
    </Box>
  );
}
