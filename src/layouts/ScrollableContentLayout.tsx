import React from 'react';

/*

    Scrollable Content Layout View:

        This is for areas where there is a scrollable body of content, we handle applying the
        standard sticky navigation bar

        Example routes:
            - /
            - /about-us

*/

interface ContentLayoutProps {
    children: React.ReactNode;
}

const ScrollableContentLayout: React.FC<ContentLayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
                <main className="flex-grow">{children}</main>
            </div>
        </div>
    );
}

export default ScrollableContentLayout;