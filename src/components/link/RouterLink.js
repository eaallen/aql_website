import React from 'react'
import { Link } from 'react-router-dom'

export default function RouterLink(props) {
    return <Link to={props.to}>{props.childern}</Link>
}