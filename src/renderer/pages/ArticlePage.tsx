import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { labels } from '../arabic.labels';
import ArticleList from '../components/article/ArticleList'

const ArticlePage: React.FC = () => {
    return (
        <Box>
            <Heading>{labels.article}</Heading>
            <ArticleList />
        </Box>
    );
}

export default ArticlePage;