import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Header from './Header';

const HomeLayout = () => {
    return (

        <div className='font-poppins'>
            
            <navbar>
            <Navbar></Navbar>   
            </navbar>
            <header>
            <Header className='w-11/12 mx-auto'>
            </Header>
            </header>
            {/* <main>
                <CardSection></CardSection>
                <BlogSection></BlogSection>
                <Review></Review>

            </main> */}
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;