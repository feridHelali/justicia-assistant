import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { labels } from '../arabic.labels';

const CourtMatierPage: React.FC = () => {
    return (
        <Box>
            <Heading>{labels.matier}</Heading>
        </Box>
    );
}

export default CourtMatierPage;