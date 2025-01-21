import React from 'react'
import PageHeader from "../../components/pageHeader/pageHeader";

const service3 = () => {
  return (
    <div>
      <PageHeader
        name={"UI UX Design"}
        bgText={"Services"}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "UI UX Design", path: "#" },
        ]}
      />
    </div>
  )
}

export default service3
