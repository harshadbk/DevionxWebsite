import React from 'react'
import PageHeader from '../../components/pageHeader/pageHeader';

const carrier = () => {
    return (
        <div>
            <PageHeader
                name={"Carriers"}
                bgText={"Company"}
                arrayOfLink={[
                    { name: "Home", path: "/" },
                    { name: "Carriers", path: "/product_pages" },
                ]}
            />
        </div>
    )
}

export default carrier;