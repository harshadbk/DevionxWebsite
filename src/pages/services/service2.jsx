import React from 'react'
import PageHeader from "../../components/pageHeader/pageHeader";

const service2 = () => {
  return (
    <div>
      <PageHeader
        name={"Mobile Development"}
        bgText={"Services"}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Mobile Development", path: "#" },
        ]}
      />
    </div>
  )
}

export default service2
