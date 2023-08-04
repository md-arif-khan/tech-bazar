import Footer from "@/components/Layouts/shared/Footer";
import Navbar from "@/components/Layouts/shared/Navbar";


const RootLayout = ({children}) => {
    return (
        <>
            <Navbar/>
            {children}
            <Footer/>
        </>
    );
};

export default RootLayout;