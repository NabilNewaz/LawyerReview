import { Accordion } from 'flowbite-react';
import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto px-5 mt-5 mb-5 md:mt-0 md:mb-0'>
            <Accordion>
                <Accordion.Panel>
                    <Accordion.Title>
                        Difference between SQL and NoSQL
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-300 dark:text-gray-400">
                            SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        What is JWT, and how does it work?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-300 dark:text-gray-400">
                            JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        What is the difference between javascript and NodeJS?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-300 dark:text-gray-400">
                            JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
                        </p>

                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        How does NodeJS handle multiple requests at the same time?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-300 dark:text-gray-400">
                            Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.
                        </p>
                        <p className="mb-2 text-gray-300 dark:text-gray-400">
                            How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
    );
};

export default Blog;