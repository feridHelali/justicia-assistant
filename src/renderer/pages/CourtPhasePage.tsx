import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { labels } from '../arabic.labels';

const CourtPhasePage: React.FC = () => {
    return (
        <Box>
            <Heading>{labels.courtPhase}</Heading>
        </Box>
    );
}

export default CourtPhasePage;
