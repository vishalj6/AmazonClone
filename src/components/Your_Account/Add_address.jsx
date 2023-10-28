// Created by DEV SHAH , Last Modified at 04-Sep-2023, 23:00 

import { useState, useContext } from "react"
import axios from "axios"
import "./Add_address.css"
import { NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"

const AddNewAddress = () => {
    const navigate = useNavigate();
    let states = {
        "india": [
            'Gujarat',
            'Andhra Pradesh',
            'Arunachal Pradesh',
            'Assam',
            'Bihar',
            'Chhattisgarh',
            'Goa',
            'Haryana',
            'Himachal Pradesh',
            'Jharkhand',
            'Karnataka',
            'Kerala',
            'Madhya Pradesh',
            'Maharashtra',
            'Manipur',
            'Meghalaya',
            'Mizoram',
            'Nagaland',
            'Odisha',
            'Punjab',
            'Rajasthan',
            'Sikkim',
            'Tamil Nadu',
            'Telangana',
            'Tripura',
            'Uttar Pradesh',
            'Uttarakhand',
            'West Bengal'
        ]

    }
    let countries = [
        'Afghanistan',
        'Albania',
        'Algeria',
        'Andorra',
        'Angola',
        'Antigua and Barbuda',
        'Argentina',
        'Armenia',
        'Australia',
        'Austria',
        'Azerbaijan',
        'Bahamas',
        'Bahrain',
        'Bangladesh',
        'Barbados',
        'Belarus',
        'Belgium',
        'Belize',
        'Benin',
        'Bhutan',
        'Bolivia',
        'Bosnia and Herzegovina',
        'Botswana',
        'Brazil',
        'Brunei',
        'Bulgaria',
        'Burkina Faso',
        'Burundi',
        'Cabo Verde',
        'Cambodia',
        'Cameroon',
        'Canada',
        'Central African Republic',
        'Chad',
        'Chile',
        'China',
        'Colombia',
        'Comoros',
        'Congo (Congo-Brazzaville)',
        'Costa Rica',
        'Croatia',
        'Cuba',
        'Cyprus',
        'Czechia (Czech Republic)',
        'Democratic Republic of the Congo (Congo-Kinshasa)',
        'Denmark',
        'Djibouti',
        'Dominica',
        'Dominican Republic',
        'East Timor (Timor-Leste)',
        'Ecuador',
        'Egypt',
        'El Salvador',
        'Equatorial Guinea',
        'Eritrea',
        'Estonia',
        'Eswatini',
        'Ethiopia',
        'Fiji',
        'Finland',
        'France',
        'Gabon',
        'Gambia',
        'Georgia',
        'Germany',
        'Ghana',
        'Greece',
        'Grenada',
        'Guatemala',
        'Guinea',
        'Guinea-Bissau',
        'Guyana',
        'Haiti',
        'Holy See',
        'Honduras',
        'Hungary',
        'Iceland',
        'India',
        'Indonesia',
        'Iran',
        'Iraq',
        'Ireland',
        'Israel',
        'Italy',
        'Ivory Coast',
        'Jamaica',
        'Japan',
        'Jordan',
        'Kazakhstan',
        'Kenya',
        'Kiribati',
        'Kuwait',
        'Kyrgyzstan',
        'Laos',
        'Latvia',
        'Lebanon',
        'Lesotho',
        'Liberia',
        'Libya',
        'Liechtenstein',
        'Lithuania',
        'Luxembourg',
        'Madagascar',
        'Malawi',
        'Malaysia',
        'Maldives',
        'Mali',
        'Malta',
        'Marshall Islands',
        'Mauritania',
        'Mauritius',
        'Mexico',
        'Micronesia',
        'Moldova',
        'Monaco',
        'Mongolia',
        'Montenegro',
        'Morocco',
        'Mozambique',
        'Myanmar (formerly Burma)',
        'Namibia',
        'Nauru',
        'Nepal',
        'Netherlands',
        'New Zealand',
        'Nicaragua',
        'Niger',
        'Nigeria',
        'North Korea',
        'North Macedonia (formerly Macedonia)',
        'Norway',
        'Oman',
        'Pakistan',
        'Palau',
        'Palestine State',
        'Panama',
        'Papua New Guinea',
        'Paraguay',
        'Peru',
        'Philippines',
        'Poland',
        'Portugal',
        'Qatar',
        'Romania',
        'Russia',
        'Rwanda',
        'Saint Kitts and Nevis',
        'Saint Lucia',
        'Saint Vincent and the Grenadines',
        'Samoa',
        'San Marino',
        'Sao Tome and Principe',
        'Saudi Arabia',
        'Senegal',
        'Serbia',
        'Seychelles',
        'Sierra Leone',
        'Singapore',
        'Slovakia',
        'Slovenia',
        'Solomon Islands',
        'Somalia',
        'South Africa',
        'South Korea',
        'South Sudan',
        'Spain',
        'Sri Lanka',
        'Sudan',
        'Suriname',
        'Sweden',
        'Switzerland',
        'Syria',
        'Tajikistan',
        'Tanzania',
        'Thailand',
        'Togo',
        'Tonga',
        'Trinidad and Tobago',
        'Tunisia',
        'Turkey',
        'Turkmenistan',
        'Tuvalu',
        'Uganda',
        'Ukraine',
        'United Arab Emirates',
        'United Kingdom',
        'United States of America',
        'Uruguay',
        'Uzbekistan',
        'Vanuatu',
        'Venezuela',
        'Vietnam',
        'Yemen',
        'Zambia',
        'Zimbabwe'
    ]

    const [country_use, setCountry_use] = useState("India");
    const { setloginUser } = useContext(AuthContext);
    const [add_one_address, setAdd_one_address] = useState({
        fullName: "",
        mobileNumber: "",
        pinCode: "",
        firstAddressField: "",
        secondAddressField: "",
        thirdAddressField: "",
        townCity: "",
        state: "",
        country: country_use,
        defaultAddressCheck: false,
    })

    const HandleChange = (e) => {
        setAdd_one_address({ ...add_one_address, [e.target.name]: e.target.value });
    }

    const HandleChange2 = (e) => {
        // for checkboxes
        setAdd_one_address({ ...add_one_address, [e.target.name]: e.target.checked });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // here we are sending the data to the backend
        try {
            axios.post("http://localhost:3001/user_add_address", add_one_address, { withCredentials: true }).then((response) => {
                if (response.status === 201) {
                    setloginUser({ ...response.data.existingUser, [response.data.existingUser.address]: response.data.updatedAddresses });
                    navigate("/address")
                }
                console.log(response);
            }).catch((err) => console.log(err))
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <div className="ADDR-add-new-address-comp">
                <div className="ADDR-add-new-address-comp-inner">
                    <ul className="go_back_links">
                        <NavLink to="/account"><li className="go_back_li">  Your Account</li> </NavLink>  &gt;
                        <NavLink to="/address"><li className="go_back_li">Your Addresses </li> </NavLink> &gt;
                        <NavLink to="/user_add_address"><li className="go_back_li">New Address  </li> </NavLink>
                    </ul>
                    <form onSubmit={handleSubmit} method="post">
                        <table cellSpacing={10} border={0} className="ADDR-table-form">
                            <caption className="ADDR-caption"><h1>Add a new address</h1></caption>
                            <tr>
                                <td colSpan={2}>
                                    <b className="ADDR-b">Country/Region</b>
                                    <br></br>
                                    <select className="ADDR-select" name="country" onChange={(e) => setCountry_use(e.target.value)}>
                                        <option className="ADDR-option" value="India" selected>India</option>
                                        {
                                            countries.map((i) => {
                                                return (
                                                    <>
                                                        <option className="ADDR-option" value={i}>{i}</option>
                                                    </>
                                                )
                                            })
                                        }
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <b>Full name (First and Last name)</b>
                                    <br></br>
                                    <input type="text" name="fullName" onChange={HandleChange} required />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <b>Mobile number</b>
                                    <br></br>
                                    <input type="text" name="mobileNumber" minLength={10} maxLength={10} onChange={HandleChange} required />
                                    <br></br>
                                    <sub><small>May be used to assist delivery</small></sub>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <b>Pincode</b>
                                    <br></br>
                                    <input type="text" minLength={6} maxLength={6} placeholder="6 digits [0-9] PIN code" name="pinCode" onChange={HandleChange} required />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <b>Flat, House no., Building, Company, Apartment</b>
                                    <br></br>
                                    <input type="text" name="firstAddressField" onChange={HandleChange} required />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <b>Area, Street, Sector, Village</b>
                                    <br></br>
                                    <input type="text" name="secondAddressField" onChange={HandleChange} required />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <b>Landmark</b>
                                    <br></br>
                                    <input type="text" name="thirdAddressField" onChange={HandleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: "50%" }} >
                                    <b>Town/City</b>
                                    <br></br>
                                    <input type="text" name="townCity" onChange={HandleChange} required />
                                </td>
                                <td>
                                    <b>State</b>
                                    <br></br>
                                    <select className="ADDR-select" name="state" onChange={HandleChange}>
                                        <option className="ADDR-option" disabled selected>Choose a state</option>
                                        {
                                            states['india'].map((i) => {
                                                return (
                                                    <>
                                                        <option className="ADDR-option" value={i}>{i}</option>
                                                    </>
                                                )
                                            })
                                        }
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <input type='checkbox' name="defaultAddressCheck" id="defaultAddressCheck" onChange={HandleChange2} className="default_checkbox" />
                                    <label htmlFor="defaultAddressCheck" className="default_checkbox_label" > Make this my default address</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input className="ADDR-add-address-button" type='submit' value={"Add Address"} />
                                </td>
                                <td></td>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddNewAddress