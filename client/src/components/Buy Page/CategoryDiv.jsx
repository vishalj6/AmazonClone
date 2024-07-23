import React from 'react'



const categories = ["Electronics","Mobiles & Accesories","Laptop & Accesories","TV & Home Entertainment","Audio","Cameras","Computer Peripherals","Smart Technology","Musical Instruments","Office & Stationery"]

const CategoryDiv = () => {
  return (
    <>
    <div className="category-div-buypage">
        <ul>
            {categories.map((ele)=>{
                return <li> {ele} </li>
            })}
        </ul>
    </div>
    <hr />
    <div className="mini-buypage-div">
        <p>
        <a href="/">Electronics</a> › <a href="/">Mobiles & Accesories</a> › <a href="/">Smartphones & Basic Mobiles</a> › <a href="/">Smartphones</a>
        </p>
    </div>
    
    </>
  )
}

export default CategoryDiv