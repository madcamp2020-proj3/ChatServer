import { FormCheck } from "react-bootstrap";

import React from 'react'
import Sidebar from "./Sidebar";

export default function Dashboard({ id }) {
    return (
        <div>
            <Sidebar id={id} />
        </div>
    )
}
