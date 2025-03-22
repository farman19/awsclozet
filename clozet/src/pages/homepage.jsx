import React, { createContext, useEffect, useState } from "react";
import './home.css'

import Header from "../components/header/header";
import Sidebar from "../components/sidebar/sidebar";
import Dashboard from "./dashboard/dashboard";
import { Route, Routes } from "react-router-dom";
import Newsale from "./newsale/newsale";
import AddProduct from "./addproduct/addproduct";


const MyContext = createContext();

const HomePage = ()=>{
  
  const [sidebardrop, setSidebardrop] = useState(false)
  

  
  const values = {
      sidebardrop,
      setSidebardrop
  }

    return(
        <>
        <MyContext.Provider value={values}>
        <Header/>
        <div className='section-container'>
        <div className={`sidebar ${sidebardrop === true ? 'toggle' : ''}`}>
                        <Sidebar />
                    </div>
                    <div className={`page-content ${sidebardrop === true ? 'toggle' : ''}`}>
                    


                    
                    </div>
     </div>
        
        </MyContext.Provider>
        </>
    )
}

export default HomePage;
export{MyContext}