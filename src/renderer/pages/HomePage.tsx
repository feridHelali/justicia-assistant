import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { labels } from '../arabic.label'

const HomePage: React.FC = () => {
  return (
    <Box>
      <Heading>{labels.home}</Heading>
    </Box>
  );
};

export default HomePage;