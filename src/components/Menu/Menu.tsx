import React from 'react';
import { Box, Flex, Text, Button, IconButton, Stack, useDisclosure, useBreakpointValue } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

export const Menu = () => {
    const { open, onToggle } = useDisclosure();
    const displayMobileMenu = useBreakpointValue({ base: "flex", md: "none" });

    return (
        <div style={styles.container}>
            <div style={{
                display: 'flex'
            }}>
                <a style={styles.sectionLink} href="#"> Início</a>
                <a style={styles.sectionLink} href="#"> Nossa História</a>
                <a style={styles.sectionLink} href="#"> Sobre os Padrinhos</a>
                <a style={styles.sectionLink} href="#"> Mensagens aos noivos</a>
                <a style={styles.sectionLink} href="#"> Presentes</a>
                <a style={styles.sectionLink} href="#"> Confirmar Presença</a>
            </div>


            {/* Mobile Menu */}
            <Box
                display={open ? "block" : "none"}
                pb={4}
                bg="teal.500"
                color="white"
            >
                <Stack textAlign="center">
                    <Button style={styles.sectionLink} _hover={{ textDecoration: 'none' }} color="#DE9B86">
                        INÍCIO
                    </Button>
                    <Button style={styles.sectionLink} _hover={{ textDecoration: 'none' }}>
                        About
                    </Button>
                    <Button style={styles.sectionLink} _hover={{ textDecoration: 'none' }}>
                        Services
                    </Button>
                    <Button style={styles.sectionLink} _hover={{ textDecoration: 'none' }}>
                        Contact
                    </Button>
                </Stack>
            </Box>
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: '#FF',
        display: 'flex',
        justifyContent: 'center',
        minWidth: '1024px',
    },
    menuContent: {
        padding: 18,
        flex: 'auto',
    },
    sectionLink: {
        color: '#E1A18E',
        fontWeight: 600,
        fontSize: 28,
        padding: 18
    }
}
