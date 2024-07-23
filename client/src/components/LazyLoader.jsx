import React from 'react'
import { PropagateLoader } from "react-spinners";

const LazyLoader = () => {
    return (
        <PropagateLoader
            color="#F5C800"
            cssOverride={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                width: "100dvw",
                // margin: "0 auto",
                borderColor: "red",
            }}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader" />
    )
}

export default LazyLoader