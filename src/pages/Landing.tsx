import React from 'react';
import ScrollableContentLayout from "../layouts/ScrollableContentLayout";

const Landing: React.FC = () => {
    return <ScrollableContentLayout>
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-6xl font-bold">Wallace AI</h1>
            <h2 className="text-2xl font-bold">Predictions</h2>
            <h2 className="text-2xl font-bold">Error Distributions</h2>
            <h2 className="text-2xl font-bold">Further Resources</h2>
        </div>
    </ScrollableContentLayout>;
}

export default Landing;