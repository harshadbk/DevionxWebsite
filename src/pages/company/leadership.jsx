import React from 'react'
import PageHeader from '../../components/pageHeader/pageHeader';

const leadership = () => {
    return (
        <div>
            <PageHeader
                name={"Leadership"}
                bgText={"Company"}
                arrayOfLink={[
                    { name: "Home", path: "/" },
                    { name: "Leadership", path: "/product_pages" },
                ]}
            />
        </div>
    )
}

export default leadership;