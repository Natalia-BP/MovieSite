// Componentes
import Section from './comps/Section';
import Navbar from './comps_fijos/Navbar';
import Footer from './comps_fijos/Footer';

function Layout(props) {

  

    return (
        <>
            <Navbar />
            <Section />
            <Footer />
        </>
    );
}

export default Layout;