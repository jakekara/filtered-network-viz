import React from "react";
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";

import Handle from "./Handle.jsx"
import Track from "./Track";
import Tick from "./Tick";

export default function DoubleFilter(props) {

    const sliderStyle = {  // Give the slider some width
        position: 'relative',
        width: '100%',
        height: 80,
        // border: '1px solid steelblue',
    }

    const railStyle = {
        position: 'absolute',
        width: '100%',
        height: 10,
        marginTop: 35,
        borderRadius: 5,
        // backgroundColor: '#8B9CB6',
        backgroundColor:"#efefef",

    }
    return (
        <div style={{
            boxSizing: "border-box",
            padding: 20
        }}>
            <Slider
                onUpdate={props.onChange}
                // onChange={props.onChange}
                rootStyle={sliderStyle}
                domain={[props.minValue, props.maxValue]}
                step={1}
                mode={2}
                values={[props.minValue, props.maxValue]}
            >
                <Rail>
                    {({ getRailProps }) => (
                        <div style={railStyle} {...getRailProps()} />
                    )}
                </Rail>
                <Handles>
                    {({ handles, getHandleProps }) => (
                        <div className="slider-handles">
                            {handles.map(handle => (
                                <Handle
                                    key={handle.id}
                                    handle={handle}
                                    getHandleProps={getHandleProps}
                                />
                            ))}
                        </div>
                    )}
                </Handles>
                <Tracks left={false} right={false}>
                    {({ tracks, getTrackProps }) => (
                        <div className="slider-tracks">
                            {tracks.map(({ id, source, target }) => (
                                <Track
                                    key={id}
                                    source={source}
                                    target={target}
                                    getTrackProps={getTrackProps}
                                />
                            ))}
                        </div>
                    )}
                </Tracks>
                <Ticks values={[0, 25, 50, 75, 100]}>
                    {({ ticks }) => (
                        <div className="slider-ticks">
                            {ticks.map(tick => (
                                <Tick key={tick.id} tick={tick} count={ticks.length} />
                            ))}
                        </div>
                    )}
                </Ticks>
            </Slider>
        </div>
    );
}