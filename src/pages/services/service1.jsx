import React from 'react'
import PageHeader from "../../components/pageHeader/pageHeader";

const service1 = () => {
  return (
    <div>
      <PageHeader
        name={"Web Development"}
        bgText={"Services"}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Web Development", path: "#" },
        ]}
      />
    </div>
  )
}

export default service1
