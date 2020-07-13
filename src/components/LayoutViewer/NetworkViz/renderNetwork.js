// import { sigma as Sigma } from 'sigma';
// import * as sigma from "sigma";
// import sigma from "sigma"
// const sigma2 = require("sigma");


import { UndirectedGraph } from 'graphology';
import erdosRenyi from 'graphology-generators/random/erdos-renyi';
// import randomLayout from 'graphology-layout/random';

import * as sigma from 'sigma';

export default function renderNetwork(
    container,
    data,
    options
) {


    console.log("Rendering network with container", container);
    console.log("... and using data", data);
    const nodeKeys = Object.keys(data.nodes);
    const graph = erdosRenyi(UndirectedGraph, { order: nodeKeys.length, probability: 0 });
    // randomLayout.assign(graph);

    graph.nodes().forEach((node, i) => {
        const id = nodeKeys[i]
        const nd = data.nodes[id]

        graph.mergeNodeAttributes(node, {
            // label: faker.name.findName(),
            // size: Math.max(4, Math.random() * 10),
            color: 0x000000,
            x: nd.x, //nd.coords[0],
            y: nd.y,//nd.coords[1],
            id,

            // this is dataset-specific, just playing with label params
            label: nd.page_name
        });

        // graph.setNodeAttribute(node, "x", .coords[0]);
        // graph.setNodeAttribute(node, "y", data.nodes[nodeKeys[i]].coords[1]);
        // graph.setNodeAttribute(node, "label", data.nodes[nodeKeys[i]].page_name);

    });

    data.edges.forEach((edge, i) => {
        //   console.log("Adding edge", edge)
        try{
            graph.addEdge(edge.source, edge.target);
        } catch(e){
            // console.error("Error adding edge", edge)
        }
    })


    const renderer = new sigma.WebGLRenderer(graph, container);

    window.graph = graph;
    window.renderer = renderer;
    window.camera = renderer.camera;
}