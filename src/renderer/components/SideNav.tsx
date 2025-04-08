import React from 'react';
import { Box, VStack, Link,Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { labels } from '../arabic.labels';
import { FaHome, FaBriefcase, FaFileContract, FaPlusSquare } from 'react-icons/fa';
const SideNav: React.FC = () => {
    return (
        <Box w="200px" p={4} bg="gray.800" color="white" h="100vh" fontSize={"xl"}>
            <VStack spacing={4} align="stretch">
                <Link as={RouterLink} to="/" display={"flex"} alignItems={"flex-start"}>
                    <FaHome style={{ marginLeft: '10px' }} />{labels.home}
                </Link>
                <hr/>
                <Link as={RouterLink} to="/affairs" display={"flex"} alignItems={"flex-start"}>
                    <FaBriefcase style={{ marginLeft: '10px' }} />{labels.affairList}
                </Link>
                <Link as={RouterLink} to="/affair-form" display={"flex"} alignItems={"flex-start"}>
                    <FaPlusSquare style={{ marginLeft: '10px' }} /> {labels.addAffair}
                </Link>
                <hr/>
                <Link as={RouterLink} to="/scheduler" display={"flex"} alignItems={"flex-start"}>
                    <FaFileContract style={{ marginLeft: '10px' }} /> {labels.scheduler}
                </Link>
                <hr/>
                <Text  display={"flex"} alignItems={"flex-start"}>   
                    {labels.settings}
                </Text>
                
                <Link as={RouterLink} to="/users" display={"flex"} alignItems={"flex-start"}>
                    <FaBriefcase style={{ marginLeft: '10px' }} /> {labels.usersList}
                </Link>
                <Link as={RouterLink} to="/user-form" display={"flex"} alignItems={"flex-start"}>
                    <FaPlusSquare style={{ marginLeft: '10px' }} /> {labels.createUser}
                </Link>
                <hr/>
                <Link as={RouterLink} to="/courts" display={"flex"} alignItems={"flex-start"}>
                    <FaBriefcase style={{ marginLeft: '10px' }} /> {labels.courtList}
                </Link>
                <Link as={RouterLink} to="/court-form" display={"flex"} alignItems={"flex-start"}>
                    <FaPlusSquare style={{ marginLeft: '10px' }} /> {labels.createCourt}
                </Link>
                <hr/>
                <Link as={RouterLink} to="/articles" display={"flex"} alignItems={"flex-start"}>
                    <FaBriefcase style={{ marginLeft: '10px' }} /> {labels.articleList}
                </Link>
                <Link as={RouterLink} to="/article-form" display={"flex"} alignItems={"flex-start"}>
                    <FaPlusSquare style={{ marginLeft: '10px' }} /> {labels.createArticle}
                </Link>
                <hr/>
                <Link as={RouterLink} to="/case-stage" display={"flex"} alignItems={"flex-start"}>
                    <FaBriefcase style={{ marginLeft: '10px' }} /> {labels.caseStageList}
                </Link>
                <Link as={RouterLink} to="/case-stage-form" display={"flex"} alignItems={"flex-start"}>
                    <FaPlusSquare style={{ marginLeft: '10px' }} /> {labels.createCaseStage}
                </Link>
                <hr/>
                <Link as={RouterLink} to="/exit" display={"flex"} alignItems={"flex-start"}>
                    <FaFileContract style={{ marginLeft: '10px' }} /> {labels.quit}
                </Link>

            </VStack>
        </Box>
    );
};

export default SideNav;
