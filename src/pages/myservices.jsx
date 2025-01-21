import React from 'react'
import PageHeader from '../components/pageHeader/pageHeader';
import Getintouch from '../components/freequote';
import Services from '../components/services/services';

const myservices = () => {
  return (
    <div className='none'>
      <PageHeader
        bgText={"Services"}
        name={"Services"}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Services", path: "#" },
          { name: "Services", path: "#" },
        ]}
      />
      <Services/>
      <Getintouch />
    </div>
  )
}

export default myservices
