import React from 'react'

export default function Alert(props) {  // iska used hamne "success" ka "S" capital karne ke liye kiya h.
    const capitalize =(word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        {/*"props.alert &&" ka used hamne "And Gate" ke tor kiya h  */}
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        {/*{props.alert.type} ka used hamne type "success" and {props.alert.msg} ka used msg "Dark/Light mode has been enabled" show karne ke liye kiya h*/}
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        {/* Hamne <Button> "Tag" ko Comment isliye kiya h taki ham Alert me [x] ka sign hata sake.*/}
    </div>
  )
}
