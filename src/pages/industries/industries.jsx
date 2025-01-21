import React from 'react'
import PageHeader from '../../components/pageHeader/pageHeader';
import Industries from '../../components/industries/industries';
import  GetInTouch from '../../components/getintouch'

const product1 = () => {
    return (
        <div>
            <PageHeader
                name={"Industries We Served"}
                bgText={"Industries"}
                arrayOfLink={[
                    { name: "Home", path: "/" },
                    { name: "Industries", path: "/industries" },
                ]}
            />
            <Industries />
            <GetInTouch></GetInTouch>
        </div>
    )
}

export default product1