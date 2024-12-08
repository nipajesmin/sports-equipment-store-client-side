import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Header from './Header';
import Equipments from './Equipments';
import { useLoaderData } from 'react-router-dom';
import EquipmentCart from './EquipmentCart';
import SportsCategories from './sportsCategories';

const HomeLayout = () => {
   // const equipmentss = useLoaderData();
    return (

        <div className='font-poppins'>
            
            <navbar>
            <Navbar></Navbar>   
            </navbar>
            <header>
            <Header className='w-11/12 mx-auto'>
            </Header>
            </header>
            <main>
                {/* <CardSection></CardSection>
                <BlogSection></BlogSection>
                <Review></Review> */}

                <EquipmentCart></EquipmentCart>
                <SportsCategories></SportsCategories>

            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;