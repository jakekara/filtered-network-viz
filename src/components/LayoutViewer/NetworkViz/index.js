import React, { useRef, useEffect } from "react";
import renderNetwork from "./renderNetwork";

export default function NetworkViz(props) {
    const vizContainer = useRef();

    console.log("Rendering NetworkViz with props", props);

    useEffect(() => {
        if (!props.nodes) {
            return;
        }
        if (!props.edges) {
            return;
        }
        renderNetwork(vizContainer.current,
            {
                nodes: props.nodes,
                edges: props.edges
            },
            {}
        )
    })
    return (
        <div>
            <div ref={vizContainer}>
                NetworkViz
            </div>
        </div>

    );

}