import React from 'react';

function Main({children}) {
    return (
        <main id="main">
            <section className="contain">
                    {children}
            </section>
        </main>
    )
}

export default Main;