import React from "react";
import Layout from "../components/DefaultLayout.tsx";

const ServicesPage: React.FC = () => {
    return (
        <Layout activePage="services">
            <div className="p-8">
                <h1 className="text-3xl font-bold text-blue-900">Healthcare Services</h1>
                <p className="mt-4 text-gray-700">Details about services go here...</p>
            </div>
        </Layout>
    );
};

export default ServicesPage;
