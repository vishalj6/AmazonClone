import React from 'react'

const CountryList = ["Australia", "Brazil", "Canada", "China", "France", "Germany", "Italy", "Japan", "Mexico", "Netherlands", "Poland", "Singapore", "Spain", "Turkey", "United Arab Emirates","United Kingdom", "United States"]

const Country = () => {
  return (

    <div className="country">
      <div className="country-first-div">
        <ul>
          <li><a href="/"><img src={require("../../images/amaozn_footer.png")} alt="amazon-logo" /></a></li>
          <li className="language-switch"><span><i className="fa-solid fa-globe" /> &nbsp;English &nbsp; <i className="fa-solid fa-angle-down" /></span></li>
        </ul>
      </div>
      <div className="country-list">
        <ul>
          {CountryList.map((item, index) => {
            return (
              <li key={index} >
                <a href="/">{item}</a>
              </li>
            );
          }
          )
          }
        </ul>
      </div>
    </div>


  )
}

export default Country