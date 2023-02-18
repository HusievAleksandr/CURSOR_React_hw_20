import React from 'react';
import Nav from '../components/Nav';
import { Route, Routes as ReactRouterRouts } from 'react-router-dom';
import HomePage from '../pages/Home.page';
import SideOfPublicationsPage from '../pages/SideOfPublications.page';
import PhotoSidePage from '../pages/PhotoSide.page';
import SideWithContactsPage from '../pages/SideWithContacts.page';

export const appRotes ={
        home:{
          id:1,
          path:"/CURSOR_React_hw_20/",
          element:<HomePage />
        } ,

        puplications:{
            id:2,
            path:"/CURSOR_React_hw_20//puplications",
            element:<SideOfPublicationsPage />
          } ,
          
          photo:{
            id:3,
            path:"/CURSOR_React_hw_20/photo",
            element:<PhotoSidePage />
          } ,

          contacts:{
            id:4,
            path:"/CURSOR_React_hw_20/contacts",
            element:<SideWithContactsPage />
          } 
};


const Routes = props => {
    return (
        <div>
            <Nav />
            <ReactRouterRouts>
                {Object.values(appRotes).map(({id, path, element})=>(
                <Route key={id} path={path} element={element} />))  }                
            </ReactRouterRouts>
        </div>
    );
}; 



export default Routes;