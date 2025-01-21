import React from 'react'
import PageHeader from "../../components/pageHeader/pageHeader";

const service4 = () => {
  return (
    <div>
      <PageHeader
        name={"AI & ML Solutions"}
        bgText={"Services"}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "AI & ML Solutions", path: "#" },
        ]}
      />
    </div>
  )
}

export default service4;