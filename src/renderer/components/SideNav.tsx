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
                    <FaFileContract style={{ marginLeft: '10px' }} /> {labels.users}
                </Link>
                
                <Link as={RouterLink} to="/courts" display={"flex"} alignItems={"flex-start"}>
                    <FaPlusSquare style={{ marginLeft: '10px' }} /> {labels.courts}
                </Link>
                <Link as={RouterLink} to="//court-matier" display={"flex"} alignItems={"flex-start"}>
                    <FaFileContract style={{ marginLeft: '10px' }} /> {labels.matier}
                </Link>
                <Link as={RouterLink} to="/court-phase" display={"flex"} alignItems={"flex-start"}>
                    <FaPlusSquare style={{ marginLeft: '10px' }} /> {labels.courtPhase}
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
