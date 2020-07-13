import React, { useState, useEffect } from 'react';

import DoubleFilter from "./DoubleFilter";
import NewtorkViz from "./NetworkViz";
// import loadCSV from "./loadCSV";
// import * as d3 from "d3-dsv";
import loadJSON from "./loadJSON";

export default function LayoutPicker(props) {

    const [config, setConfig] = useState({});
    const { layout } = props;
    console.log("Rendering LayoutViewer with layout", layout);

    useEffect(() => {
        if (!layout) { return }
        console.log("Fetching", layout, layout.edgeList, layout.nodeList)
        Promise.all([layout.edgeFile, layout.nodeFile].map(loadJSON))
            .then(([edgeData, nodeData]) => {
                console.log("edgeData", edgeData);
                console.log("nodeData", nodeData)
                setConfig({
                    edges:edgeData,
                    nodes:nodeData
                })
                
            });
    }, [layout])

    return (
        <div>
            <DoubleFilter />
            <NewtorkViz nodes={config.nodes} edges={config.edges}/>
        </div>
    );
}