import React from 'react'
import App from './App'
export default function Alert(props) {
    return (
        <div>
            <div className="alert alert-primary" role="alert">
            {props.alert.type}: {props.alert.msg} 
</div>

        </div>
    )
}
