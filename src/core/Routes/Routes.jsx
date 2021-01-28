import React, { useEffect, useState } from 'react';
import {Switch, Route} from "react-router-dom";
import Cover from "../../pages/Cover/Cover";
import Navbar from "../../core/Navbar/Navbar";


const Routes = () => {

    const [scrollHeight, setScrollHeight] = useState(0);
    const handleScroll = () => {
      //window.pageYOffset returns the number of pixels the document is currently scrolled along the vertical axis with a value of 0.0
    const position = window.pageYOffset;
    setScrollHeight(position);
    }
  
    useEffect(() => {
    //cada vez que se mueva el scroll, useEffect se actualizará
      window.addEventListener("scroll", handleScroll);
    }, [scrollHeight])

    return (
        <Switch>
            <Route path="/">
                <Navbar isScrolling={scrollHeight}/>
                <Cover/>
            </Route>
        </Switch>
    )
}

export default Routes

