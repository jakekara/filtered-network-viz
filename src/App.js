import React, { useEffect, useState } from 'react';
import LayoutPicker from "./components/LayoutPicker";
import LayoutViewer from "./components/LayoutViewer";

function App() {

  const [config, setConfig] = useState({});
  // const [layout, setLayout] = useState();

  useEffect(() => {
    fetch("data/config.json")
      .then(resp => resp.json())
      .then(data => {
        setConfig({ ...data, layout: data.layouts[Object.keys(data.layouts)[0]] })
        // setLayout(data.layouts[Object.keys(data.layouts)[0]])
        })
  }, []);

  console.log("config", config)

  const setLayout = (layout => setConfig({...config, layout}))

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
        <LayoutViewer
          layout={config.layout} />
      </main>
    </div>
  );
}

export default App;
