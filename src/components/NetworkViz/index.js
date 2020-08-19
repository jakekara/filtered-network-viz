import React, { useRef, useEffect } from "react";
import renderNetwork from "./renderNetwork";

/**
 * A network graph visualization component
 * @param {} props 
 */
export default function NetworkViz(props) {

    // Hold a reference to the DOM node for network renderer
    const vizContainer = useRef();

    // update nodes and edges when they arrive asynchronously
    useEffect(() => {
        if (!props.nodes || props.nodes.length < 1) {
            return;
        }
        if (!props.edges) {
            return;
        }
        return renderNetwork(vizContainer.current,
            {
                nodes: props.nodes,
                edges: props.edges,
                visibleNodes: props.visibleNodes,
                visibleEdges: props.visibleEdges
            },
            {}
        )
    })

    return (
        <div>
            <div className="viz-container"
                ref={vizContainer}
                style={{ width:500, height:500, marginLeft: "auto", marginRight: "auto"}}>
            </div>
        </div>

    );

}