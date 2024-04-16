import { createContext, useState } from "react";

const Mycontext = createContext({
  mode: "",
  toggleMode: () => {},
});
export const AppcontextProvider = (props) => {
  const [mode, setMode] = useState("dark");
  const toggleMode = () => {
    if (mode == "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };
  return (
    <Mycontext.Provider value={{ mode, toggleMode }}>
      {props.children}
    </Mycontext.Provider>
  );
};
export default Mycontext;
