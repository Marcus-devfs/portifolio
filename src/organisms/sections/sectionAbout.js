import { useMediaQuery } from "@mui/material";
import { Box, Text, ContentContainer } from "../../atoms";
import { CarouselSlider } from "../carousel/Carousel";
import { Colors } from "../layout/Colors";

const dataProjetos = [
    {
        id: '01',
        url: '/projetos/app-mobile.jpeg',
        name: 'App Finaiceiro',
        description: 'Aplicativo Mobile para controle financeiro',
        type: 'Front + Back',
        technologies: 'React Native, MongoDB, NodeJs, Expo',
        github: 'https://github.com/Marcus-devfs/meu-app',
        linkProjeto: 'https://www.linkedin.com/feed/update/urn:li:activity:7039575874551132160/'
    },
    {
        id: '02',
        url: '/projetos/site-web-mf.png',
        name: 'Site Web',
        description: 'Site desenvolvido para uma marcenaria local',
        type: 'Front + Back',
        technologies: 'React Js, NextJs, NodeJs, MongoDB, SendGrid',
        github: 'https://github.com/Marcus-devfs/site',
        linkProjeto: 'https://site-mfplanejados.vercel.app/home/homepage'
    },
    {
        id: '03',
        url: '/projetos/site-web.png',
        name: 'Site Web',
        description: 'Site desenvolvido para uma marcenaria local',
        type: 'Front-end',
        technologies: 'JavaScript, HTML, CSS',
        github: 'https://github.com/Marcus-devfs/site-mf-planejados',
        linkProjeto: 'https://mfplanejados.netlify.app/'
    },
    {
        id: '04',
        url: '/projetos/gerador-senha.png',
        name: 'Gerador senha',
        description: 'Aplicativo web para gerar senhas',
        type: 'Front-end',
        technologies: 'JavaScript, HTML, CSS',
        github: 'https://github.com/Marcus-devfs/Gerador-senhas',
        linkProjeto: 'https://geradorsenhamv.netlify.app'
    },
    {
        id: '05',
        url: '/projetos/api-icon.png',
        name: 'Api Aplicativo Finanças',
        description: 'API desenvolvida para o aplicativo Mobile de finanças',
        type: 'Back-end',
        technologies: 'NodeJs, MongoDB',
        github: 'https://github.com/Marcus-devfs/api-Mybank',
        linkProjeto: 'https://api-mybank-app.vercel.app/'
    },
    {
        id: '05',
        url: '/projetos/api-icon.png',
        name: 'Api site',
        description: 'API desenvolvida para o site Marcenaria',
        type: 'Back-end',
        technologies: 'NodeJs, MongoDB',
        github: 'https://github.com/Marcus-devfs/site',
        linkProjeto: 'https://api-mfplanejados.onrender.com'
    },

]



export const SectionAbout = (props) => {

    const widthCarousel = useMediaQuery('(min-width:1536px)')


    return (
        <>
            <Box fullWidth sx={styles.container}>
                <ContentContainer styles={{ backgroundColor: 'red' }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        // height: '250px',
                        flex: 1,
                        gap: 1,

                    }}>
                        <Box sx={{ width: 300, borderBottom: `2px solid ${Colors.darkBlue}`, }}>
                            <Text bold title style={{
                                color: Colors.darkBlue,
                                textAlign: 'center',
                                paddingBottom: 10
                            }}>PROJETOS REALIZADOS</Text>
                        </Box>
                        <Box sx={{
                            display: { xs: `flex`, xm: 'flex', md: 'flex', lg: 'flex' },
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: { xs: `85%`, xm: '90%', md: '90%', lg: '90%' },
                            gap: 3,
                        }}>
                            <CarouselSlider card containerWidth={'100%'} speedAutoplay={5000} data={dataProjetos} showArrows slideShow={widthCarousel ? 4 : 3} width={300} height={200} controls infinite autoplaySlide={true} />
                        </Box>
                    </Box>
                </ContentContainer>
            </Box>
        </>
    )
}

const styles = {
    container: {
        backgroundColor: '#fff',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        left: 0,
        paddingBottom: 10
    },

    imageSobre: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundImage: `url('/sobre-image.jpeg')`,
        width: '90%',
        height: '100%'
    },
}