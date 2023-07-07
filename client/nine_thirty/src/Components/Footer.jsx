import React from "react";

function Footer() {
    return(
        
        <footer className = "px-2 py-1 bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left ">
            <div className="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left flex justify-evenly text-white">
                <p> Who are we ? </p>
                    <p>FAQ</p>
                    <p>GCU</p>
                    <p>Contact</p>
            </div>
            
            <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
                    © 2023 Copyright:
                    <a className="text-neutral-800 dark:text-neutral-400">9.30</a>
            </div>

        

        </footer>
        

    )
};

export default Footer;
