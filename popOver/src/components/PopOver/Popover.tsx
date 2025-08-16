import { useContext, useState, useRef, useEffect } from "react";
import { createContext } from "react";
import "../../App.css";

interface PopInteface {
  open: boolean;
  toggleOpen: () => void;
  contentRef: React.RefObject<HTMLDivElement | null>;
}
let PopOverContext = createContext<PopInteface | undefined>(undefined);

function PopOver({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  const contentRef = useRef(null);

  function toggleOpen() {
    setOpen(!open);
  }

  return (
    <PopOverContext.Provider value={{ open, toggleOpen, contentRef }}>
      <div className="popParent">{children}</div>
    </PopOverContext.Provider>
  );
}

function Action({ label }: { label: string }) {
  const toggleContext = useContext(PopOverContext);
  if (!toggleContext) return;
  const { open, toggleOpen } = toggleContext;
  return <button onClick={toggleOpen}>{label}</button>;
}

function Content({ label, content }: { label: string; content: string }) {
  const toggleContext = useContext(PopOverContext);
  if (!toggleContext) return;
  const { open, contentRef } = toggleContext;
  // Use useEffect to access contentRef.current after render
  if (!open) return;
  return (
    <div className="popContent" ref={contentRef}>
      {content}
    </div>
  );
}

PopOver.Action = Action;
PopOver.Content = Content;

export default PopOver;
