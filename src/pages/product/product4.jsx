import React from 'react'
import PageHeader from '../../components/pageHeader/pageHeader';

const product4 = () => {
    return (
        <div>
            <PageHeader
                name={"E-Commerce"}
                bgText={"Products"}
                arrayOfLink={[
                    { name: "Home", path: "/" },
                    { name: "Products", path: "/product_pages" },
                ]}
            />
        </div>
    )
}

export default product4
