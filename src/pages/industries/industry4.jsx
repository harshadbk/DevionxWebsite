import React from 'react'
import PageHeader from "../../components/pageHeader/pageHeader";

const industry4 = () => {
  return (
    <div>
      <PageHeader
        name={"E-Commerce"}
        bgText={"Industries"}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: "E-Commerce", path: "#" },
        ]}
      />
    </div>
  )
}

export default industry4;