import React from 'react'
import PageHeader from "../../components/pageHeader/pageHeader";

const industry1 = () => {
  return (
    <div>
      <PageHeader
        name={"Manufacturing"}
        bgText={"Industries"}
        arrayOfLink={[
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: "Manufacturing", path: "#" },
        ]}
      />
    </div>
  )
}

export default industry1
