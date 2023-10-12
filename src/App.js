import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from 'react';
import {marked} from 'marked';
import ReactMarkdown from "react-markdown"


function App() {

  
const defaultMarkdown=`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Here is some code of mine, \`<div></div>\`, between 2 backticks. Important for later #React!

**bold**... whoa! is fabulous!
Or _italic_. _Forza Italia!_
Or... wait for it... **_both!_**
**Errors?** ~~cross them out~~.

[links](https://www.freecodecamp.org), and
> Block Quotes! are provided too!

tables, here they are:

Header1 | Header2 | Header3?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course, there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

\`\`\`
Some code block
\`\`\`
`;

  const [markdown, setMarkdown] = useState(defaultMarkdown); 
  const [html, setHTML] = useState(''); 

  function handleTextChange(event) {
    const newMarkdown = event.target.value;
    setMarkdown(newMarkdown);
    setHTML(marked(newMarkdown));
  }
  useEffect(() => {
    setHTML(marked(defaultMarkdown));
  }, []);

  
  return (
    <div className="App">
      <div className="appBody">
        <p id="title">Markdown Previewer</p>
        <div id="content-container">
          <div id="text-editor">
            <textarea
              id='editor'
              placeholder=""
              value={markdown}
              onChange={handleTextChange}
            />
          </div>
          <div id="preview"dangerouslySetInnerHTML={{ __html: html }}>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
