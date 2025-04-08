import React, { useEffect } from 'react';
import {
    Box,
    Button,
    HStack,
    Heading,
    Text,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
} from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../redux/redux.hooks';
import { useNavigate } from 'react-router-dom';
import AlfaSpinner from '../../shared/AlfaSpinner';
import { labels } from '../../arabic.labels';
import {deleteArticle,fetchArticles} from "../../redux/article/articleSlice"

const ArticleList: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const articles = useAppSelector((state) => state.articles.articles);
    const articleStatus = useAppSelector((state) => state.articles.status);
    const error = useAppSelector((state) => state.articles.error);

    useEffect(() => {
        if (articleStatus === 'idle') {
            dispatch(fetchArticles());
        }
    }, [articleStatus, dispatch]);

    const handleEdit = (articleId: any) => {
        navigate(`/article-form/${articleId}`);
    };

    const handleDelete = (articleId: any) => {
        dispatch(deleteArticle(articleId));
    };

    return (
        <Box p={5} m={5} bgColor={'gray.100'} borderRadius={5}>
            <Heading mb={5} alignContent={'center'} fontSize={'2xl'}>
                {labels.article}
            </Heading>
            {error && <Text colorScheme='red'>Error: {error}</Text>}
            {articleStatus === 'loading' && <AlfaSpinner />}
            <Table variant="striped">
                <Thead>
                    <Tr>
                        <Th>{labels.id}</Th>
                        <Th>{labels.article}</Th>
                        <Th>{labels.action}</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {articles.map((article:{id:number,label:string}) => (
                        <Tr key={article.id}>
                            <Td>{article.id}</Td>
                            <Td>{article.label}</Td>
                            <Td>
                                <HStack spacing={4}>
                                    <Button
                                        onClick={() => handleEdit(article.id)}
                                        colorScheme='teal'
                                        shadow={'md'}

                                    >
                                        {labels.update}
                                    </Button>
                                    <Button
                                        onClick={() => handleDelete(article.id)}
                                        colorScheme='red'
                                        shadow={'md'}
                                    >
                                        {labels.delete}
                                    </Button>
                                </HStack>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    );
};

export default ArticleList;
