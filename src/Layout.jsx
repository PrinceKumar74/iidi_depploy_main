import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import logo from './assets/Logo2.ico'

const Layout = ({ children, title, description }) => {
  return (
    <HelmetProvider>
      <Helmet>
        {/* Constant favicon - won't change between pages */}
        <link rel="icon" type="image/x-icon" href={logo} />
        
        {/* Dynamic meta tags that will change per page */}
        <title>{title}</title>
        <meta name="description" content={description} />
        
        {/* Open Graph / Facebook meta tags for better sharing */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        
        {/* Twitter meta tags */}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>
      
      {children}
    </HelmetProvider>
  );
};

export default Layout;