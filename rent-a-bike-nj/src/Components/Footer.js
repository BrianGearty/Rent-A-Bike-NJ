import React, { useEffect } from "react";
import { NavLink } from 'react-router-dom';
import "../style/footer.css";



function Footer() {

    useEffect(() => {
        let mybutton = document.getElementsByClassName("arrowUp")[0];
        window.onscroll = function () { scrollFunction() };

        mybutton.style.display = "none";

        function scrollFunction() {
            if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }
    })

    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    }


    //     useEffect(() => {
    //     const switchLogo =(() => {
    //         if(window.location.pathname === "/resume" || window.location.pathname === "/contact"){
    //             document.getElementsByClassName("blackLogo")[0].style.display = "none";
    //             }

    //         else {
    //             document.getElementsByClassName("whiteLogo")[0].style.display = "none";
    //         }
    //     })
    //     switchLogo();
    // })

    return (

        <footer className='container-fluid footer'>
            <h1 variant="info" onClick={topFunction} className="arrowUp" id="scrollBTN " title="Go to top">UP</h1>
            <div className="row-divided">
                <div className="col-lg-12">
                    <NavLink className="brand" to="/"><img className="logo" src="/rentBike.svg" alt="Bike by the Beach" width="200px"></img></NavLink>

                    <NavLink className="navLink footerNav text-center" to="/register">REGISTER</NavLink>

                    <NavLink className="navLink footerNav" to="/datadisplay">DATA DISPLAY</NavLink>

                    <NavLink className="navLink footerNav" to="/about">ABOUT US</NavLink>

                    <NavLink className="navLink footerNav" to="/contact">CONTACT</NavLink>
                    <span className='logo'>
                        <a href="https://www.facebook.com/brian.gearty.7/"><img src="facebooklogowhite.svg" alt="facebook logo" width="50px" className="facebook aTag"></img></a>
                        <a href="https://www.instagram.com/briangearty/?hl=en"><img src="instagramlogowhite.svg" alt="instagram logo" width="50px" className="instagram aTag"></img></a>
                        <a href="https://www.instagram.com/briangearty/?hl=en"><img src="youtubelogowhite.svg" alt="youtube logo" width="50px" className="youtube aTag"></img></a>
                    </span>
                </div>

            </div>
            <h3 className="rightsReserved text-center">© 2021 Rent A Bike NJ. All Rights Reserved</h3>
        </footer>
    );
}

export default Footer;