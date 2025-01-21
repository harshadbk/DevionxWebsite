import React from 'react'
import PageHeader from "../../components/pageHeader/pageHeader";

const service4 = () => {
  return (
    <div>
      <PageHeader
        name={"Cloud Services"}
        bgText={"Services"}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Cloud Services", path: "#" },
        ]}
      />
    </div>
  )
}

export default service4;