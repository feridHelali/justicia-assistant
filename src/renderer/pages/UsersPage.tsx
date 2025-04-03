import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { labels } from '../arabic.labels';

const UsersPage: React.FC = () => {
    return (
        <Box>
            <Heading>{labels.users}</Heading>
        </Box>
    );
}

export default UsersPage;