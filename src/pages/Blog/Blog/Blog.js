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
                <p>Node.js is runtime environment for JavaScript. We use Node.js to run JavaScript on the server side. Desktop can build using Node.js. We can use it build a website or apps backend. But we need a database for storing the data. If we don't use a database then data will be not saved by the api. So a simple solution to this is to use mongodb</p>
            </div>
            <div className="article">
                <img src="https://i.postimg.cc/ZRknFjx3/nosql.jpg" alt="nosql" />
                <h2>Differences between sql and nosql databases.</h2>
                <p>SQL means structured query language. This means that sql databases are structured in way to efficiently use data. Not too much freedom available. Nosql means it is not sql. Example of a nosql database is mongodb. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            </div>
            <div className="article">
                <img src="https://i.postimg.cc/0yM9WDQC/jwt.png" alt="jwt" />
                <h2>What is the purpose of jwt and how does it work</h2>
                <p>JSON Web Token JWT is an open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be encrypted to also provide secrecy between parties</p>
            </div>
        </div>
    );
};

export default Blog;