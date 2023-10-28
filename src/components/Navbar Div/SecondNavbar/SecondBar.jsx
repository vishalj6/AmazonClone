import React from 'react'

const listItems = ["All", "Amazon miniTV", "Best Sellers", "Mobiles", "Today's Deals", "Customer Service", "Electronics", "Prime", "New Releases", "Amazon Pay", "Home & Kitchen", "Fashion", "Beauty & Personal Care", "Computer", "Books"]

const SecondBar = () => {
  return (
    <div className="second-bar">
   <ul>
    {listItems.map((item,index)=>{
        return <li key={index}>{item}</li>
    })}
  </ul>
</div>

  )
}

export default SecondBar;