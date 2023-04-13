import { useEffect } from 'react';
import { Box } from '../atoms'
import { Colors, HeaderMenu } from '../organisms'
import '../styles/globals.css'
import { useRouter } from 'next/router';

const menuItems = [
   { to: '/home', text: 'HOME', icon: 'home_icon' },
];

function App({ Component, pageProps }) {

   const router = useRouter()

   useEffect(() => {
      router.push('/home')
   }, [])

   return (
         <Box sx={styles.bodyContainer}>
            <HeaderMenu menuItems={menuItems} />
            <Box sx={styles.contentContainer}>
               <Component {...pageProps} />
            </Box>
         </Box>
   )
}

export default App;

const styles = {
   bodyContainer: {
      display: "flex",
      minHeight: "100vh",
      flexDirection: "row",
      width: '100%',
   },
   contentContainer: {
      display: "flex",
      width: '100%',
      flexDirection: 'column',
      flex: 1,
      gap: `35px`,
      backgroundColor: Colors.darkBlue,
      // padding: { xs: `30px`, xm: `25px`, md: `50px`, lg: `0px 80px 0px 80px` },
      // paddingBottom: `60px`,
      overflowY: 'hidden',
      marginTop: { xs: `60px`, xm: 10, md: 10, lg: 10 }
   },
}