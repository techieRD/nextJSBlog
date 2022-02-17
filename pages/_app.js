// _app.js
import Layout from '../components/Layouts'
const MyApp = ({ Component, pageProps }) => {
    return (
    <Layout>
        <Component {...pageProps} />
    </Layout> 
    )
    
  }
  export default MyApp
  