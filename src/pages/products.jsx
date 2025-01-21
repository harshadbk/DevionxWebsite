import React from 'react'
import PageHeader from '../components/pageHeader/pageHeader';
import Getintouch from '../components/getintouch';

const products = () => {
  return (
    <div className='none'>
         <PageHeader
        bgText={"Products"}
        name={"Products"}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Products", path: "#" },
          { name: "Products", path: "#" },
        ]}
      />
      <Getintouch />
    </div>
  )
}

export default products
