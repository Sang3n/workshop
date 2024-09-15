import React, { useContext, createContext, useState } from 'react'
export const contactContext =createContext(null)



const Contact = () => {
const[contactDAta, setContactData]=useState({
  name:'Sannosam Sojhe Rai',
  Address: 'Phalgunanda-3 Ranke  Panchthar',
  Phone:['+977 9816921984'],
})



  
  return (
    <contactContext.Provider value={{contactData}}>
      <h1> This is the contact data</h1>
      <contactDetails/>

    </contactContext.Provider>
    
  )
}

export default Contact