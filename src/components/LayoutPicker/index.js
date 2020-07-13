import React from 'react';

function Button(layout, callback) {

    return <button
        onClick={() => { callback(layout) }}
        key={layout.label}>{layout.label}</button>
}

export default function LayoutPicker(props) {
    console.log("Rendering LayoutPicker with layouts", props)
    return (<div>Layout Picker
        <div>
            {Object.keys(props.layouts).map(k => Button(props.layouts[k], props.setLayoutCallback))}
        </div>
    </div>);

}