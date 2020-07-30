
import { MultiUndirectedGraph } from 'graphology';

// TODO - figure out why this isn't the entrypoint for the package
import * as sigma from "sigma/build/sigma.min"

export default function renderNetwork(
    container,
    data,
    options
) {

    const graph = new MultiUndirectedGraph()
    let maxNeighorCount = 0
    // update the node properties based on neighbor count
    const nodeReducer = (node, data) => {

        const neighborCount = graph.neighbors(node).length
        const size = Math.min(6, Math.max(3, 3 + neighborCount / 10 ))
        let color;
        if (neighborCount < 1) {
            color = "rgba(100,100,100,0.5)"
        } else {
            color = "rgba(255,0,0,1)"
        }
        return {
            ...data,
            size,
            color
        }
    }

    // add nodes
    data.nodes.forEach(node => {
        graph.addNode(node.id, { ...node, color: "rgba(255,0,0,1)" })
    })

    // add visible edges
    let error_count = 0
    let success_count = 0
    let last_error;
    data.visibleEdges.forEach((edge, i) => {
        try {
            graph.addEdge(edge.source, edge.target, { color: "rgba(10,10,10,0.1)" });
            success_count++
        } catch (e) {
            error_count++
            last_error = e
        }
    })
    if (error_count > 0) {
        console.warn("edge add reports. success=", success_count, "errors=", error_count, "last_error", last_error)
    }

    graph.forEachNode(nd => {
        const neighborCount = graph.neighbors(nd).length
        if (neighborCount > maxNeighorCount){
            maxNeighorCount = neighborCount
        }
    })


    // clear out the container
    container.innerHTML = "";
    const renderer = new sigma.WebGLRenderer(graph, container, {
        nodeReducer
    });

    window.graph = graph;
    window.renderer = renderer;
    window.camera = renderer.camera;
}