import RootLayout from '@/components/Layouts/RootLayout';
import Banner from '@/components/UI/Banner';
import React from 'react';

const Category = ({data}) => {
    console.log(data)
    return (
        <div>
            <h1>This is category page</h1>
        </div>
    );
};

export default Category;
Category.getLayout = function getLayout(page) {
    return (
      
       <RootLayout>
        {page}
       </RootLayout>
      
    )
  }

  export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('http://localhost:5000/category')
    const category = await res.json()
   
    
    return {
      props: {
        data:category,
      },
    }
  }