import React from 'react'
import PageHeader from "../../components/pageHeader/pageHeader";

const industry3 = () => {
  return (
    <div>
      <PageHeader
        name={"Education"}
        bgText={"Industries"}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: "Education", path: "#" },
        ]}
      />
    </div>
  )
}

export default industry3