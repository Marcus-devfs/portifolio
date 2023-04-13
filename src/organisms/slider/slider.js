import { Box, Text } from "../../atoms";
import { useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { CarouselSlider } from "../carousel/Carousel";
import { Colors } from "../layout/Colors";

const skills = [
    {
        id: '01',
        url: '/react_icon.png',
        name: 'React.Js'
    },
    {
        id: '02',
        url: '/react_icon.png',
        name: 'ReactNative'
    },
    {
        id: '03',
        url: '/next_icon.png',
        name: 'Next.js'
    },
    {
        id: '04',
        url: '/mongodb_icon.svg',
        name: 'MongoDB'
    },
    {
        id: '05',
        url: '/nodejs_icon.png',
        name: 'Node.Js'
    },
    {
        id: '05',
        url: '/css_icon.png',
        name: 'CSS'
    },
    {
        id: '05',
        url: '/aws_icon.png',
        name: 'AWS'
    },

]

export const Carousel = () => {

    const widthCarousel = useMediaQuery('(min-width:1536px)')

    return (
        <>
            <Box sx={styles.container}>
                <Box sx={{marginBottom: 5, borderBottom: `1px solid ${Colors.darkBlue}`, width: { xs: `100%`, xm:'500px', md:'500px', lg:'500px' }}}>
                    <Text title bold style={{color: Colors.darkBlue, marginBottom: 10, textAlign: 'center'}}>CONHECIMENTO - HABILIDADES</Text>
                </Box>
                <CarouselSlider centerModeSlider containerWidth={'100%'} data={skills} showArrows slideShow={widthCarousel ? 6 : 5} text={true} width={120} height={120} controls infinite autoplaySlide={true} />
            </Box>
        </>
    )
}

const styles = {
    container: {
        // backgroundColor: 'red',
        left: 0,
        width: { xs: `90%`, xm: `90%`, md: `90%`, lg: `90%` },
        // marginLeft: { xs: `10%`, xm: `2.5%`, md: `2.5%`, lg: `5%` },
        height: '250px',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        display: 'flex',
        paddingLeft: { xs: 5, sm: '0px', md: 22, lg: 22 },
    },
}