import React from 'react'
import PageHeader from "../../components/pageHeader/pageHeader";

const industry2 = () => {
  return (
    <div>
      <PageHeader
        name={"Healthcare"}
        bgText={"Industries"}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: "Healthcare", path: "#" },
        ]}
      />
    </div>
  )
}

export default industry2