
import React from 'react';

/**
 * A button representing a layout
 * @param {*} layout 
 * @param {*} callback 
 */
function Button(layout, callback) {

    return <button
        onClick={() => { callback(layout) }}
        key={layout.label}>{layout.label}</button>
}

/**
 * A tool to select from one or more layouts
 * @param {*} props 
 */
export default function LayoutPicker(props) {

    return (<div style={{
        boxSizing:"border-box",
        padding: 10
    }}>
        <h3>Layout Picker</h3>
        <div>
            {Object.keys(props.layouts).map(k => Button(props.layouts[k], props.setLayoutCallback))}
        </div>
    </div>);

}