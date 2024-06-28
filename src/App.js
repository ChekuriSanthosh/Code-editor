import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';

import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

import './prism-vsc-dark-plus.css';
import './editor.css';

const codeSnippet = `import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <h1>Hello World</h1>
);

`;

function App() {
  const [code, setCode] = useState(codeSnippet);

  return (
    <div className="App">
      <h3 className="Heading">
        React code editor and syntax highlighter using PrismJS
      </h3>
      <h4 className='Heading1'><b>Code Editor</b></h4>

      <div className="window">
        <div className="editor_wrap">
          <Editor
            value={code}
            onValueChange={(code) => setCode(code)}
            highlight={(code) => highlight(code, languages.js)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
