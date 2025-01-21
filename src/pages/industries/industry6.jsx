import React from 'react'
import PageHeader from "../../components/pageHeader/pageHeader";

const industry6 = () => {
  return (
    <div>
      <PageHeader
        name={"Real Estate"}
        bgText={"Industries"}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: "Real Estate", path: "#" },
        ]}
      />
    </div>
  )
}

export default industry6;