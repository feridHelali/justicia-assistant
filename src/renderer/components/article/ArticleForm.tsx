
import React, { useEffect, useState } from 'react';
import { Box, Button, FormControl, FormLabel, Heading, Input, VStack, HStack, Text } from '@chakra-ui/react';
import { labels } from '../../arabic.labels';
import { useAppDispatch, useAppSelector } from '../../redux/redux.hooks';
import { AppDispatch, RootState } from '../../redux/store';
import {fetchArticleById,createArticle,updateArticle,switchToCreateMode,switchToUpdateMode} from '../../redux/article/articleSlice'
import { useNavigate, useParams } from 'react-router-dom';
import AlfaSpinner from '../../shared/AlfaSpinner';


interface articleState {
    articleId?: number;
    label: string;
    mode: 'create' | 'update';
}

const initialArticle: articleState = {
    articleId:-1,
    label: '',
    mode: 'create'
};

const ArticleForm: React.FC = () => {
    const navigate = useNavigate();
    const { articleId } = useParams<{ articleId: string }>();
    const dispatch: AppDispatch = useAppDispatch();
    const articleStatus = useAppSelector((state: RootState) => state.articles.status);
    const currentArticle = useAppSelector((state: RootState) => state.articles.currentArticle);
    const error = useAppSelector((state: RootState) => state.articles.error);
    const mode = useAppSelector((state: RootState) => state.articles.mode);
    const [newArticle, setNewArticle] = useState<articleState>(initialArticle);



    useEffect(() => {
        if (articleId) {
            dispatch(switchToUpdateMode());
            dispatch(fetchArticleById(articleId));
        } else {
            dispatch(switchToCreateMode());
        }
    }, [articleId, dispatch]);


    useEffect(() => {
        if (currentArticle && mode === 'update') {
            setNewArticle({
                ...currentArticle,
            })
        }
    }, [currentArticle, mode]);

    useEffect(() => {
        if (mode === 'create') {
            setNewArticle(initialArticle);
        }
    }, [mode]);

  
    const handleCreate = () => {
        const articleDTO = {
            articleId: newArticle.articleId,
            label: newArticle.label,
        }


        if (isArticleValid(newArticle) && mode === 'create') {
            dispatch(createArticle(articleDTO))
                .then(() => navigate('/articles'));
        }
    };

    const handleUpdate = () => {
        if (currentArticle && isArticleValid(newArticle)) {
            const updatedArticleDTO = {
                articleId: currentArticle.articleId,
            };
            dispatch(updateArticle(updatedArticleDTO))
                .then(() => navigate('/articles'));
        }
    };

    return (
        <Box p={5} m={5} bgColor={'gray.100'} borderRadius={5}>
            {articleStatus === 'loading' && <AlfaSpinner />}
            {error && <Text colorScheme='red'>Error: {error}</Text>}
            <VStack spacing={4}>
                <Heading>{mode === 'update' ? labels.update : labels.create} {labels.article}</Heading>
                <FormControl>
                    {mode === 'update' && <FormLabel>#{currentArticle?.articleId}</FormLabel>}
                    <FormLabel>{labels.article}</FormLabel>
                    <Input
                        value={newArticle.label}
                        onChange={(e) => setNewArticle((prev) => ({ ...prev, label: e.target.value }))}
                    />
                </FormControl>
               
              </VStack>
            <HStack spacing={4} mt={4} justifyContent='flex-end' p={4}>
                <Button onClick={mode === 'update' ? handleUpdate : handleCreate} colorScheme='blue' shadow='md' isDisabled={!isArticleValid(newArticle)}>
                    {mode === 'update' ? labels.update : labels.save}
                </Button>
            </HStack>
        </Box>
    );
};

export default ArticleForm;

function isArticleValid(_article: articleState): boolean {
    return !!(_article &&
        _article.label.trim() 
    );
}


