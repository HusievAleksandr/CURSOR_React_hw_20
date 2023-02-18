import React from 'react';
import Nav from '../components/Nav';
import { Route, Routes as ReactRouterRouts } from 'react-router-dom';
import HomePage from '../pages/Home.page';
import SideOfPublicationsPage from '../pages/SideOfPublications.page';
import PhotoSidePage from '../pages/PhotoSide.page';
import SideWithContactsPage from '../pages/SideWithContacts.page';


const Routes = props => {
    return (
        <div>
            <Nav />
            <ReactRouterRouts>
                <Route path="/" element={<HomePage />}/>
                <Route path="/puplications" element={<SideOfPublicationsPage />}/>
                <Route path="/photo" element={<PhotoSidePage />}/>
                <Route path="/contacts" element={<SideWithContactsPage />}/>
            </ReactRouterRouts>
        </div>
    );
}; 



export default Routes;