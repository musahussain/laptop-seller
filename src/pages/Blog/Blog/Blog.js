import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog-container'>
            <div className="article">
                <img src="https://i.postimg.cc/VvCc7FGQ/jsvsnodejs.jpg" alt="difference between javascript nodejs" />
                <h2>Difference between JavaScript and Node.js</h2>
                <p>JavaScript is a simple programming language that runs in any browser JavaScript Engine. For example chrome JavaScript engine is v8. Whereas Node JS is a run time environment for JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use. We can node.js to run JavaScript on the Server.</p>
            </div>
            <div className="article">
                <img src="https://i.postimg.cc/vTq3VRLG/mongo.png" alt="When should you use nodejs and when should you use mongodb" />
                <h2>When should you use nodejs and when should you use mongodb</h2>
                <p>JavaScript is a simple programming language that runs in any browser JavaScript Engine. For example chrome JavaScript engine is v8. Whereas Node JS is a run time environment for JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use. We can node.js to run JavaScript on the Server.</p>
            </div>
            <div className="article">
                <img src="https://i.postimg.cc/ZRknFjx3/nosql.jpg" alt="nosql" />
                <h2>Differences between sql and nosql databases.</h2>
                <p>JavaScript is a simple programming language that runs in any browser JavaScript Engine. For example chrome JavaScript engine is v8. Whereas Node JS is a run time environment for JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use. We can node.js to run JavaScript on the Server.</p>
            </div>
            <div className="article">
                <img src="https://i.postimg.cc/0yM9WDQC/jwt.png" alt="jwt" />
                <h2>What is the purpose of jwt and how does it work</h2>
                <p>JavaScript is a simple programming language that runs in any browser JavaScript Engine. For example chrome JavaScript engine is v8. Whereas Node JS is a run time environment for JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use. We can node.js to run JavaScript on the Server.</p>
            </div>
        </div>
    );
};

export default Blog;