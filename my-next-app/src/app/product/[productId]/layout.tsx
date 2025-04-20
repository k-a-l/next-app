import React from "react";

export default function ProductDetails({
    children
}:{
    children:React.ReactNode}){
    return(
        <>
        {children}
        <h1>This is the clildren details feature</h1>
        </>
    )
}