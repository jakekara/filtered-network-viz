import React, { useState, useEffect } from "react";

import DoubleFilter from "./DoubleFilter";

export default function DoubleNumericFilter(props) {

    // const [selectedValues, setSelectedValues] = useState([])

    // Get all of the values that are needed to filter
    // sort them determine the extent
    const entities = props.data[props.filter.entity];
    const values = entities.map(e => e[props.filter.attribute])
    const min = Math.min(...values);
    const max = Math.max(...values);
    const [selectedValues, setSelectedValues] = useState([min, max])

    useEffect(() => {
        // create a boolean array of if value for each entity is within range

        console.log("Updating")
        const filterEntity = entity => {
            const entityValue = entity[props.filter.attribute]
            return entityValue <= selectedValues[1] && entityValue >= selectedValues[0];
        }

        // props.setFilterMask(entities.map(filterEntity))
        props.setFilterMask(props.data[props.filter.entity].map(filterEntity))
    }, [selectedValues,
        entities])



    return (
        <div>
            <h3>Filter {props.filter.entity} by {props.filter.attribute}</h3>
            <DoubleFilter
                minValue={min}
                maxValue={max}
                onChange={(values) => {
                    setSelectedValues(values)
                }}
            />

        </div>
    )
}
