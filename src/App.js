import React, { useEffect, useState } from 'react';
import LayoutPicker from "./components/LayoutPicker";
import FilterPane from "./components/FilterPane";
// import LayoutViewer from "./components/LayoutViewer";
import NetworkViz from "./components/NetworkViz"
import loadJSON from "./utils/loadJSON";

function App() {

  const [config, setConfig] = useState({});
  const [visible, setVisible] = useState({ nodes: [], edges: [] });

  // const [layout, setLayout] = useState();
  const filters = config.layout ? config.layout.filters : [];
  const setLayout = (layout => setConfig({ ...config, layout }))

  useEffect(() => {
    fetch("data/config.json")
      .then(resp => resp.json())
      .then(data => {
        setConfig({ ...data, layout: data.layouts[Object.keys(data.layouts)[0]] })
      })
  }, []);

  useEffect(() => {
    if (!config.layout) { return }

    // fetch external node and edge data
    Promise.all([config.layout.edgeFile, config.layout.nodeFile].map(loadJSON))
      .then(([edgeData, nodeData]) => {
        setConfig({
          ...config,
          edges: edgeData,
          nodes: nodeData
        })

      });
  }, [config.layout]);

  return (
    <div className="FilteredNetworkApp">
      <header className="App-header">
        Filtered Network Viewer
      </header>
      <main>
        
        <LayoutPicker
          setLayoutCallback={setLayout}
          selectedLayout={0}
          layouts={config.layouts || []} />

        <FilterPane
          data={config}
          filters={filters}
          updateVisible={setVisible}
        />

        <NetworkViz
          visibleNodes={visible.nodes}
          visibleEdges={visible.edges}
          nodes={config.nodes}
          edges={config.edges}
        />
      </main>
    </div>
  );
}

export default App;
