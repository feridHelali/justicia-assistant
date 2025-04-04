import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { labels } from '../arabic.labels';

const CaseStagePage: React.FC = () => {
    return (
        <Box>
            <Heading>{labels.caseStage}</Heading>
        </Box>
    );
}

export default CaseStagePage;
