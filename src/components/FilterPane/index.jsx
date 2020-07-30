import React, { useState } from "react";

import mergeBooleanArrays from "../../utils/mergeBooleanArrays"
import filterAgainstBooleanMask from "../../utils/filterAgainstBooleanMask"
import "./FilterPane.css"

import NumberRange from "./Filters/NumberRange"
import { useEffect } from "react";

function EmptyFilterPane() {
    return (null)
}

export default function FilterPane(props) {

    const { filters } = props;
    const { nodes, edges } = props.data;
    const [filterMasks, setFilterMasks] = useState({
        nodes: [],
        edges: []
    })


    // Update the visible nodes and edges by compressing the 
    useEffect(() => {
        const visibleNodes = filterAgainstBooleanMask(props.data.nodes, mergeBooleanArrays(...filterMasks.nodes))
        const visibleEdges = filterAgainstBooleanMask(props.data.edges, mergeBooleanArrays(...filterMasks.edges))
        // const visibleEdges = filterAgainstBooleanMask(edges, Array((edges || []).length).fill(false))
        props.updateVisible({
            nodes: visibleNodes,
            edges: visibleEdges
        })
    }, [filterMasks, props.data.edges, props.data.nodes])


    // console.log("Rendering filterpane with props", props)
    // If the data is incomplete, return empty
    // If there are no filters, return empty
    if (!edges) { return <EmptyFilterPane /> }
    if (!nodes) { return <EmptyFilterPane /> }
    if (filters.length < 1) { return <EmptyFilterPane /> }

    // For each filter object, render a filter component
    return (
        <div className="FilterPane">
            {
                filters.map((filter, filterIndex) => {

                    return (
                        <div
                            style={{
                                // backgroundColor:"rgba(120,120,120,0.5)"
                            }}
                            key={filterIndex}>
                            <NumberRange
                                filter={filter}
                                setFilterMask={filterMask => {
                                    let newFilterMasks = { ...filterMasks };
                                    newFilterMasks[filter.entity][filterIndex] = filterMask
                                    setFilterMasks(newFilterMasks)

                                }}
                                data={{
                                    nodes,
                                    edges
                                }}
                            />
                        </div>

                    );
                })
            }
        </div>
    )

}