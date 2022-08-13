import React from 'react';
import Link from "next/link";
import users from "../data/data.json"

const About = () => {
    return (
        <div>
            {users.map(({id, name}) => (
                <div key={id}>
                    <Link href={"/" + id}>
                        {name}
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default About;