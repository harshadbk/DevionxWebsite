import React from 'react'
import PageHeader from "../../components/pageHeader/pageHeader";

const service4 = () => {
  return (
    <div>
      <PageHeader
        name={"IT Consulting"}
        bgText={"Services"}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "IT Consulting", path: "#" },
        ]}
      />
    </div>
  )
}

export default service4;