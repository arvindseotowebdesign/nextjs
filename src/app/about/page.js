import React from 'react';
import Header from '../components/Header';
const HTMLRenderer = ({ htmlContent }) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

const About = () => {
    const getData = async () => {
        try {
            const response = await fetch("https://backend-9mwl.onrender.com/all-blogs");
            if (!response.ok) {
                throw new Error("Failed to fetch API");
            }
            const data = await response.json();
            return data.blogs;
        } catch (error) {
            console.error("Error fetching data:", error);
            return [];
        }
    };

    const renderBlogs = async () => {
        const blogs = await getData();
        return (
            <div>
                <h2>Login Page !!</h2>
                {blogs.map(blog => (
                    <div key={blog._id}>
                        <h3>{blog.title}</h3>
                        <HTMLRenderer htmlContent={blog.description} />
                        {blog.image && <img src={blog.image} alt={blog.title} />}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <>
            <Header />

            {renderBlogs()}

        </>
    );
};

export default About;
