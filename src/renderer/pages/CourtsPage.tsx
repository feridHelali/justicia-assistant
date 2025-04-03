import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { labels } from '../arabic.labels';

const CourtsPage: React.FC = () => {
    return (
        <Box>
            <Heading>{labels.courts}</Heading>
        </Box>
    );
}

export default CourtsPage;