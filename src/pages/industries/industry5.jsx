import React from 'react'
import PageHeader from "../../components/pageHeader/pageHeader";

const industry5 = () => {
  return (
    <div>
      <PageHeader
        name={"Finance & Banking"}
        bgText={"Industries"}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: "Finance & Banking", path: "#" },
        ]}
      />
    </div>
  )
}

export default industry5