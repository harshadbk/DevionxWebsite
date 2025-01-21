import React from 'react'
import PageHeader from '../../components/pageHeader/pageHeader';

const product3 = () => {
    return (
        <div>
            <PageHeader
                name={"CRM (Customer Relationship Management)"}
                bgText={"Products"}
                arrayOfLink={[
                    { name: "Home", path: "/" },
                    { name: "Products", path: "/product_pages" },
                ]}
            />
        </div>
    )
}

export default product3
