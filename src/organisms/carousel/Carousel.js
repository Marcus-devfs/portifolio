import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import { Box, ContentContainer, Text } from "../../atoms";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery, useTheme } from "@mui/material";
import { Colors } from "../layout/Colors";
import Link from "next/link";

export const CarouselSlider = (props) => {



  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: showArrows ? "block" : 'none', filter: 'brightness(100) invert(1)' }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: showArrows ? "block" : 'none', filter: 'brightness(100) invert(1)' }}
        onClick={onClick}
      />
    );
  }


  const {
    data = [],
    slideShow = 0,
    slideShowThumb = 0,
    text = false,
    autoplaySlide = false,
    controls = false,
    width = null,
    height = null,
    showArrows = false,
    containerWidth = '100%',
    comodo = null,
    style = {},
    thumb = false,
    positionSelect = 0,
    centerModeSlider = false,
    card = false,
    aroundBorder = false,
    speedAutoplay = 2500
  } = props;

  const settings = {
    dots: true,
    fade: thumb ? true : false,
    adaptiveHeight: thumb ? true : false,
    infinite: true,
    slidesToShow: slideShow,
    slidesToScroll: 1,
    autoplay: autoplaySlide,
    autoplaySpeed: speedAutoplay,
    controls: controls,
    pauseOnHover: true,
    showArrows: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  const [slider1, setSlider1] = useState(null)
  const [slider2, setSlider2] = useState(null)

  const [showText, setShowText] = useState(false)

  function handleMouseOver() {
    setShowText(true)
  }

  function handleMouseLeave() {
    setShowText(false)
  }

  // const onClick = (item) => {
  //   location.href = `${item}`, target='_blank';
  // }


  return (
    <>
      {thumb ?
        <>
          <Slider
            asNavFor={slider2}
            ref={(slider) => setSlider1(slider)}
          >
            {/* {data?.filter((item, index) => index == urlSelected).map((item, index) => ( */}
            {data?.map((item, index) => (
              <Box sx={{
                position: 'relative',
                alignItems: 'center',
              }} key={index} >
                <Box sx={{
                  ...styles.imageCarouselLarge,
                  backgroundImage: `url('${item?.url}')`,
                  width: { xs: `90%`, xm: width ? width : `320px`, md: width ? width : `320px`, lg: width ? width : `320px` },
                  height: { xs: '300px', xm: height ? height : '300px', md: height ? height : '300px', lg: height ? height : '300px' },
                  // marginLeft: { xs: `15%`, xm: `0px`, md: `0px`, lg: `0px` }
                  // marginLeft: thumb && '25%'
                  margin: 'auto'
                }} />
                {text ?
                  <Text title style={{
                    position: 'absolute',
                    backgroundColor: '#0f0f0f',
                    opacity: 0.7,
                    width: '50%',
                    top: '50%',
                    left: '50%',
                    textWeight: 'bold',
                    transform: 'translate(-50%, -50%)',
                    color: '#fff',
                    textAlign: 'center',
                  }}>{item?.name}</Text>
                  : ''}
              </Box>
            ))
            }
          </Slider>
          {data.length > 1 ? (
            <Slider
              asNavFor={slider1}
              focusOnSelect={true}
              ref={(slider) => setSlider2(slider)}
              slidesToShow={slideShowThumb}
              swipeToSlide={true}
              controls={false}
              arrows={false}
            >
              {
                data?.map((item) => (
                  <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    width: '90%',
                    flexDirection: 'row',
                    overflow: 'hidden',
                    justifyContent: { xs: `center`, xm: 'space-between', md: 'space-between', lg: 'space-between' },
                    // position: 'absolute'
                    marginTop: 2
                  }} key={item?.id} >
                    <Box sx={{
                      ...styles.imageCarouselLarge,
                      backgroundImage: `url('${item?.url}')`,
                      width: { xs: `100px`, xm: `150px`, md: `100px`, lg: `100px` },
                      height: { xs: '60px', xm: '60px', md: '60px', lg: '60px' },
                      margin: '10px 3px'
                      // marginLeft: { xs: `15%`, xm: `0px`, md: `0px`, lg: `0px` }
                    }} />
                  </Box>
                ))
              }
            </Slider>
          ) : null}
        </>
        :
        card ?
          <Box sx={{ width: { xs: `100%`, xm: containerWidth, md: containerWidth, lg: containerWidth }, }}>
            <Slider {...settings}>
              {data.map((item, index) => (
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',

                }} key={item.id}>
                  <ContentContainer style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', backgroundColor: Colors.background, height: 500, margin: 1 }}>
                    <Box>
                      <Link href={item.linkProjeto} target='_blank'>
                        <Box sx={{
                          ...styles.imageCarouselLarge,
                          backgroundImage: `url('${item?.url}')`,
                          width: { xs: `90%`, xm: width ? width : `220px`, md: width ? width : `220px`, lg: width ? width : `220px` },
                          height: { xs: '300px', xm: height ? height : '200px', md: height ? height : '200px', lg: height ? height : '200px' },
                          margin: 'auto',
                          borderRadius: 2,
                          cursor: 'pointer',
                          transition: '0.5s',
                          "&:hover": {
                            opacity: 0.6,
                            cursor: 'pointer',
                          }
                        }} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} />
                      </Link>
                    </Box>
                    {showText ?
                      <Text title style={{
                        position: 'absolute',
                        backgroundColor: Colors.darkBlue,
                        opacity: 0.7,
                        width: '80%',
                        top: '50%',
                        left: '50%',
                        textWeight: 'bold',
                        transform: 'translate(-50%, -50%)',
                        color: '#fff',
                        textAlign: 'center',
                        opacity: 1,
                        transition: 'opacity 0.5s ease',
                      }}>{item?.name}</Text>
                      :
                      <Text title style={{
                        position: 'absolute',
                        backgroundColor: Colors.darkBlue,
                        opacity: 0.7,
                        width: '80%',
                        top: '50%',
                        left: '50%',
                        textWeight: 'bold',
                        transform: 'translate(-50%, -50%)',
                        color: '#fff',
                        textAlign: 'center',
                        opacity: 0,
                        transition: 'opacity 2s ease',
                      }}>{item?.name}</Text>}
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', width: '100%', overflowY: 'scroll' }}>
                      <Box sx={styles.boxText}>
                        <Text small bold style={styles.title}>descrição: </Text>
                        <Text small style={styles.descriptions}>{item.description}</Text>
                      </Box>
                      <Box sx={styles.boxText}>
                        <Text small bold style={styles.title}>Tecnologias:</Text>
                        <Text small style={styles.descriptions}> {item.technologies}</Text>
                      </Box>
                      <Box sx={styles.boxText}>
                        <Text small bold style={styles.title}>repo gitHub:</Text>
                        <Text small style={styles.descriptions}> {item.github}</Text>
                      </Box>
                      <Box sx={styles.boxText}>
                        <Text small bold style={styles.title}>link projeto:</Text>
                        <Text small style={styles.descriptions}> {item.linkProjeto}</Text>
                      </Box>
                    </Box>
                  </ContentContainer>
                </Box>
              ))}
            </Slider >
          </Box >
          :
          <Box sx={{ width: { xs: `100%`, xm: containerWidth, md: containerWidth, lg: containerWidth } }}>
            <Slider {...settings}>
              {data?.map((item) => (
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }} key={item.id} >
                  <Box sx={{ height: 200, alignItems: 'center', justifyContent: 'center', width: '100%', display: 'flex', flexDirection: 'column', borderRadius: aroundBorder ? '100%' : 0, marginLeft:`auto`}}>
                    <Box sx={{
                      // backgroundColor: '#fff',
                      ...styles.imageCarouselLarge,
                      backgroundImage: `url('${item.url}')`,
                      mixBlendMode: 'multiply',
                      width: { xs: `100%`, xm: width ? width : `320px`, md: width ? width : `320px`, lg: width ? width : `320px` },
                      height: { xs: '220px', xm: height ? height : '300px', md: height ? height : '300px', lg: height ? height : '300px' },
                    }} />
                    {text ?
                      <Text title style={{
                        // position: 'absolute',
                        opacity: 0.7,
                        textWeight: 'bold',
                        color: Colors.darkBlue,
                        textAlign: 'center',
                        display: 'flex',
                        justifyContent: 'center'
                      }}>{item.name}</Text>
                      : ''}
                  </Box>
                </Box>
              ))
              }
            </Slider>
          </Box >
      }

    </>
  );
}

const styles = {
  container: {
    width: '100%',
  },
  imageCarouselLarge: {
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    overflow: 'hidden',
    backgroundPosition: 'center center',
  },
  boxText: {
    backgroundColor: '#fff',
    padding: 2,
    margin: '2px',
  },
  descriptions: {
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  title: {
    color: Colors.darkBlue,
    textOverflow: 'ellipsis'
  }
}
