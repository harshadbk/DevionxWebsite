import React from 'react'
import PageHeader from '../../components/pageHeader/pageHeader';

const product2 = () => {
    return (
        <div>
            <PageHeader
                name={"ERS (Enterprise Resource Planning System)"}
                bgText={"Products"}
                arrayOfLink={[
                    { name: "Home", path: "/" },
                    { name: "Products", path: "/product_pages" },
                ]}
            />
        </div>
    )
}

export default product2
