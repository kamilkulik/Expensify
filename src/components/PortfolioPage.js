import React from 'react';

const PortfolioPage = ({match, location}) => {
    return (
        <div>
        <div>
            <p>
                <strong>Match props:</strong>
                <code>{JSON.stringify(match, null, 2)}</code>
            </p>
            <p>
            <strong>Location props:</strong>
            <code>{JSON.stringify(location, null, 2)}</code>
            </p>
        </div>
        <div>

            <h3>This is my first portfolio page</h3>
        </div>
        </div>
    )};

export default PortfolioPage;