import React from 'react'
import ListComponent from './ListComponent'


const About = ["Get to know us","About Us","Careers","Press Releases","Amazon Science"]
const Social = ["Connect with Us","Facebook","Twitter","Instagram"]
const MakeMoney = ["Make Money with  Us","Sell on Amazon","Sell under Amazon Accelerator","Protect and Build Your Brand","Amazon Global Selling","Become an Affiliate","Fulfillment by Amazon","Advertise Your Products","Amazon Pay on Merchants"]

const Help = ["Let us Help You","COVID-19 and Amazon","Your Account","Returns Centre","100% Purchase Protection","Amazon App Download","Amazon Assistant Download","Help"]

const FooterOne = () => {
  return (
    <div className="footer-one">
    <ListComponent ClassName="list-one" List={About} />
    <ListComponent ClassName="list-two" List={Social} />
    <ListComponent ClassName="list-three" List={MakeMoney} />
    <ListComponent ClassName="list-four" List={Help} />
</div>

  )
}

export default FooterOne