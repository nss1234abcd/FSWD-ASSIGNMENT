import { useState } from "react";
import File from "./File";

function Folder({ node, setData }) {
  const [expanded, setExpanded] = useState(true);

  const addItem = (type) => {
  const name = prompt(`Enter ${type} name`);
  if (!name) return;

  const newChild = {
    name,
    type,
    content: type === "file" ? "" : undefined,
    children: type === "folder" ? [] : undefined,
  };

  node.children = [...node.children, newChild];
  setData({ ...node });
};

  const deleteItem = (index) => {
    node.children.splice(index, 1);
    setData({ ...node });
  };

  return (
    <div className="folder">
      <div className="folder-header">
        <span onClick={() => setExpanded(!expanded)}>
          📁 {node.name}
        </span>

        <button onClick={() => addItem("folder")}>+ Folder</button>
        <button onClick={() => addItem("file")}>+ File</button>
      </div>

      {expanded && (
        <div className="children">
          {node.children.map((child, index) =>
            child.type === "folder" ? (
              <Folder
                key={index}
                node={child}
                setData={setData}
              />
            ) : (
            //   <div key={index} className="file">
            //     📄 {child.name}
            //     <button onClick={() => deleteItem(index)}>❌</button>
            //   </div>
            <File
  key={index}
  file={child}
  onDelete={() => deleteItem(index)}
  onUpdate={(newContent) => {
    child.content = newContent;
    setData({ ...node });
  }}
/>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default Folder;