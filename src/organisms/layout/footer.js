import { useMediaQuery, useTheme } from "@mui/material"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { Box, ContentContainer, Text } from "../../atoms"
import { Colors } from "./Colors"

export const Footer = ({ menuItems = [] }) => {

    const router = useRouter()

    return (
        <>
            <Box sx={styles.container} id={'#footer'}>
                <Box sx={styles.containerBox}>
                    <ContentContainer style={{
                        alignItems: 'center',
                        display: 'flex',
                        boxShadow: 'none',
                        justifyContent: 'center',
                        backgroundColor: 'none'
                    }}>
                        <Text title style={{ ...styles.text }}>Contatos</Text>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Link href={'https://www.linkedin.com/in/marcus-vinicius-fonseca-silva-75647b158/'} target='_blank'>
                                <Box sx={{ ...styles.icon, backgroundImage: `url('/icons/linkedin_icon.png')`, }} />
                            </Link>
                            <Text bold style={{ ...styles.text, }}> linkedin.com/MarcusSilva</Text>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Box sx={{ ...styles.icon, backgroundImage: `url('/icons/email-icon.png')`, }} />
                            <Text bold style={{ ...styles.text, }}> marcusvf.silva@outlook.com</Text>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Box sx={{ ...styles.icon, backgroundImage: `url('/icons/tel-icon.png')`, }} />
                            <Text bold style={{ ...styles.text }}> +55 (11) 96181-9664</Text>
                        </Box>
                    </ContentContainer>
                </Box>
                <Box sx={styles.containerBox}>
                    <ContentContainer style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        boxShadow: 'none',
                        backgroundColor: 'none'
                    }}>
                        <Text title style={{ ...styles.text, }}>Redes Sociais</Text>
                        <Text style={{ ...styles.text }}>Venha conferir:</Text>
                        <Link href={"https://wa.me/5511961819664"} target='_blank'>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Box sx={{ ...styles.icon, backgroundImage: `url('/icons/whatsApp-icon.png')`, }} />
                                <Text bold style={{ ...styles.text }}> WhatsApp</Text>
                            </Box>
                        </Link>
                        <Link href={"https://github.com/Marcus-devfs?tab=repositories"} target='_blank'>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Box sx={{ ...styles.icon, backgroundImage: `url('/icons/github_icon.svg')`, }} />
                                <Text bold style={{ ...styles.text }}> Marcus-devfs</Text>
                            </Box>
                        </Link>


                    </ContentContainer>
                </Box>
                <Box sx={{
                    backgroundColor: 'pink', width: '100%', height: 30, backgroundColor: Colors.background, display: 'flex', position: 'absolute', bottom: 0, alignItems: 'center',
                    justifyContent: 'center', marginTop: 5
                }}>
                    <Text style={{ textAlign: 'center', color: 'darkGray' }}>Criado por Marcus-devfs @ 2023 Todos os direitos reservados</Text>
                </Box>
            </Box>

        </>
    )
}


const styles = {
    container: {
        position: 'absolute',
        height: { xs: `80%`, xm: '50%', md: '50%', lg: '50%' },
        width: '100%',
        backgroundColor: Colors.background,
        zIndex: 999,
        alignItems: 'center',
        justifyContent: { xs: `center`, xm: 'space-around', md: 'space-around', lg: 'space-around' },
        left: 0,
        right: 0,
        display: 'flex',
        flexDirection: { xs: `column`, xm: 'row', md: 'row', lg: 'row' },
        padding: { xs: `0`, xm: '0px 10px 10px 0px', md: '0px 40px 0px 40px', lg: '0px 40px 0px 40px' },
    },
    containerBox: {
        height: '100%',
        display: 'flex',
        // alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px',
        marginBottom: 5
    },
    text: {
        textAlign: 'center',
        marginTop: '5px'
    },
    icon: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'contain',
        width: 30,
        height: 30,
        marginTop: 1,
        marginRight: 1.5,
        "&:hover": {
            cursor: 'pointer', opacity: 0.8
        }
    },

}