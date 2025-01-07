
import Footer from './Footer';
import Navbar from './Navbar';
import Header from './Header';
import Equipments from './Equipments';
import { useLoaderData } from 'react-router-dom';
import EquipmentCart from './EquipmentCart';
import SportsCategories from './sportsCategories';
import Reviews from './Reviews';
import React, { useState, useEffect } from 'react';

const HomeLayout = () => {
    // const equipmentss = useLoaderData();
    // Theme state
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    // Check for saved theme in localStorage on mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDarkTheme(savedTheme === 'dark');
        }
    }, []);

    // Toggle theme and save to localStorage
    const toggleTheme = () => {
        const newTheme = !isDarkTheme;
        setIsDarkTheme(newTheme);
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    };

    // Apply the theme class to the root element
    useEffect(() => {
        const rootElement = document.documentElement;
        if (isDarkTheme) {
            rootElement.classList.add('dark');
        } else {
            rootElement.classList.remove('dark');
        }
    }, [isDarkTheme]);
    return (

        <div className={`font-poppins ${isDarkTheme ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>


            <Navbar></Navbar>

            <header className="flex flex-col items-center justify-center mt-5">
                <button
                    onClick={toggleTheme}
                    className="p-2 bg-gray-300 dark:bg-gray-700 rounded-md hover:bg-gray-400 dark:hover:bg-gray-600 transition"
                >
                    {isDarkTheme ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                </button>
                <Header className="w-11/12 mx-auto" />
            </header>
            <main>
                {/* <CardSection></CardSection>
                <BlogSection></BlogSection>
                <Review></Review> */}

                <EquipmentCart></EquipmentCart>
                <SportsCategories></SportsCategories>
                <Reviews></Reviews>

            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;