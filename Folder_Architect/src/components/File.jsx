import { useState } from "react";

function File({ file, onDelete, onUpdate }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="file-container">
      <div className="file">
        <span onClick={() => setOpen(!open)}>
          📄 {file.name}
        </span>
        <button onClick={onDelete}>❌</button>
      </div>

      {open && (
        <textarea
          value={file.content}
          onChange={(e) => onUpdate(e.target.value)}
          placeholder="Write something..."
        />
      )}
    </div>
  );
}

export default File;