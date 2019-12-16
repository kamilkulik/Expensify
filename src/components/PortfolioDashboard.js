import React from 'react';
import { NavLink } from 'react-router-dom';

const portfolioPages = [
    {
        item: 'First portfolio item',
    },
    {
        item: 'Second portfolio item',
    },
    {
        item: 'Third portfolio item',
    },
]

const PortfolioDashboard = () => {
    return (
    <div>
        <h1>Checkout some of my work</h1>
        {portfolioPages.map((page, index) => {
            return (
                <NavLink key={index} to={`/work/${index+1}`} activeClassName="is-active">{page.item}</NavLink>
            )
        })}
    </div>
    )
};

export default PortfolioDashboard;