import React from 'react';
import Navbar from "@/app/ui/dashboard/navbar/page";
import Sidebar from "@/app/ui/dashboard/sidebar/page";

function Layout({children}) {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div>
                <Sidebar/>
                {children}
            </div>
        </div>
    );
}

export default Layout;