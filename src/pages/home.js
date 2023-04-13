import Link from "next/link"
import { Box, ContentContainer, Text } from "../atoms"
import { Colors, Carousel } from "../organisms"
import { Footer } from "../organisms/layout/footer"
import { SectionAbout, } from "../organisms/sections/index"
import { useMediaQuery } from "@mui/material"

export default function HomePage() {

   const widthScreen = useMediaQuery('(min-width:1536px)')

   return (
      <Box fullWidth sx={styles.container}>
         <Box fullWidth sx={styles.containerSection}>
            <Box sx={{ display: 'flex', width: '100%', }}>
               <ContentContainer row fullWidth style={{ height: { xs: '700px', xm: 550, md: 550, lg: 550 }, flexDirection: { xs: `column`, xm: 'row', md: 'row', lg: 'row' }, boxShadow: { xs: `none`, }, backgroundColor: Colors.background, marginBottom: { xs: 7, xm: 0, md: 0, lg: 0 } }} gap={0}>
                  <Box sx={{
                     display: 'flex',
                     flexDirection: 'column',
                     justifyContent: 'center',
                     // alignItems: 'center',
                     width: { xs: 'auto', xm: '50%', md: '50%', lg: '50%' },
                     height: '100%',
                     flex: 1,
                     gap: 1,
                     padding: widthScreen ? '0px 0px 0px 250px' : { xs: '0px 0px 0px 23px', xm: '0px 0px 0px 120px', md: '0px 0px 0px 120px', lg: '0px 0px 0px 120px' }
                  }}>
                     <Box sx={{
                        width: { xs: `100%`, xm: '60%', md: '60%', lg: '60%' },
                        marginTop: 5,
                        alignItems: 'center',
                        justifyContent: 'start',
                        flexDirection: 'column',
                        borderLeft: `2px solid ${Colors.darkBlue}`,
                        padding: '0px 0px 0px 20px',
                     }}>
                        <Text title bold style={{ color: Colors.darkBlue, fontSize: 50 }}>Marcus Silva</Text>
                        <Text large style={{ color: Colors.darkBlue, marginBottom: 15 }}>Desenvolvedor Web e Mobile</Text>
                        <Text bold style={{ color: Colors.darkBlue, }}>Brasileiro - São Paulo - SP</Text>
                        <Text bold style={{ color: Colors.darkBlue, }}>(11) 96181-9664</Text>
                        <Text bold style={{ color: Colors.darkBlue, }}>marcusvf.silva@gmail.com</Text>
                     </Box>
                     <Box sx={{ width: { xs: 350, xm: 400, md: 400, lg: 400 }, height: 100, backgroundColor: Colors.darkBlue, borderRadius: 2, padding: 1, marginTop: 2 }}>
                        <Link href={"https://github.com/Marcus-devfs?tab=repositories"} target='_blank'>
                           <Box sx={{ display: 'flex', alignItems: 'center', }}>
                              <Box sx={{ ...styles.icon, backgroundImage: `url('/icons/github_icon.svg')`, }} />
                              <Text bold style={{ ...styles.text }}> Marcus-devfs</Text>
                           </Box>
                        </Link>
                        <Box sx={{ display: 'flex', alignItems: 'center', }}>
                           <Link href={'https://www.linkedin.com/in/marcus-vinicius-fonseca-silva-75647b158/'} target='_blank'>
                              <Box sx={{ ...styles.icon, backgroundImage: `url('/icons/linkedin_icon.png')`, }} />
                           </Link>
                           <Text bold style={{ ...styles.text, }}> linkedin.com/MarcusSilva</Text>
                        </Box>
                     </Box>
                  </Box>

                  <Box sx={{
                     display: 'flex',
                     flexDirection: 'column',
                     justifyContent: 'center',
                     alignItems: 'center',
                     flex: 1,
                     gap: 3,
                     marginTop: { xs: `30px`, xm: '0px', md: '0px', lg: '0px' }
                  }}>
                     <Box sx={styles.imageHeader} />
                  </Box>
               </ContentContainer>
            </Box>
         </Box>

         <Box sx={{
            height: '250px',
         }}>
            <Carousel />
         </Box>

         <SectionAbout />
         <Footer />
      </Box>

   )
}


const styles = {
   container: {
      backgroundColor: Colors.background,
      flex: 1
   },
   containerSection: {
      backgroundColor: Colors.background,
      justifyContent: 'center',
      alignItems: 'center',
      top: 10,
      left: 0,
      width: '100%',
      height: 'auto'
   },
   textHeader: {
      color: '#fff'
   },
   imageHeader: {
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundImage: `url('/perfil.jpg')`,
      width: { xs: '300px', xm: '50%', md: '50%', lg: '50%' },
      height: { xs: '250px', xm: '80%', md: '80%', lg: '80%' },
      borderRadius: 5
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
   text: {
      textAlign: 'center',
      marginTop: '5px',
      color: '#fff'
   },
}
