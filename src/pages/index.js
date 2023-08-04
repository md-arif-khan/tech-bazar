import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Banner";
import Head from "next/head";


const HomePage = () => {
  return (
    <>
      <Head>
         <title>Tech Bazar</title>
      </Head>
      <Banner/>
    </>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return (
    
     <RootLayout>
      {page}
     </RootLayout>
    
  )
}