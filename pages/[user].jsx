import React from 'react';
import {useRouter} from "next/router";
import data from "../data/data.json"

const User = () => {
    const router = useRouter()

    const user = data.find((item) =>
        item.id === router.query?.user
    )
    return (
        <div>
            Hello {user.name}
        </div>
    );
};

export default User;