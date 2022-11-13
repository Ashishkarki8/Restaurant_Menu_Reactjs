import React, { useState } from 'react'        //hook use garna lekhna parcha
import './style.css'
import Menu from './menuApi.js';   //api bata ni data chincha so
import MenuCard from './MenuCard';      //yeta dekhauna lai
import Navbar from './Navbar';

console.log("2nd from Resturent");

const uniqueList=[ ... new Set(Menu.map((curElem)=>{      /*  for adding a new menu list  (unique menu)  */
/* console.log(curElem[1,0]);  //undefined dekhaucha */
console.log(curElem);

  return curElem.category; }       
)),"All"];   // array mah element thapeko
 console.log(uniqueList);    //shows category with unique category list along with addition of one element
 

const Resturant = () => {
  console.log("ilove u ");
  const[menuData, setMenuData]=useState(Menu);    // Api bata array lerera menuData state variable mah store gareko rah menudata lai menucard mah use garcham
/* console.log(menuData[0]); */
  const [menuList, setMenuList]=useState(uniqueList);

  const filterItem =(category)=>{
    if(category==="All"){
      setMenuData(Menu);
      return;
    }
    const updatedList=Menu.filter((curElem) =>{   //filter method same like map function 
      return curElem.category=== category; /* (if mouse ley thickeko category parameter(category)===  curElem.category  eg breakfast click == curElem.category(array)) */
    })
    setMenuData(updatedList);
  }
  /* console.log(filterItem); */  

  return (
    
    <>
    {/* {console.log("iloeakda")} */}
    <Navbar filterItem={filterItem} menuList={menuList}/>            {/* {Navbar lai props pass gareko } */}
    <MenuCard menuesData={menuData}/>            {/* (mathi rakhda error) menucard call gareko rah teslai Menu component ko array pass gareko and here menuData lai props  pass gareko bhnacha */}
    </>
  )
}

export default Resturant
