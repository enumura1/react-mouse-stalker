import { useEffect, useState } from "react";
import "./App.css";

const Pointer = ({ name, position }) => (
  <div
    className={`${name}`}
    style={{
      transform: `translate(${position.x}px, ${position.y}px)`,
    }}
  ></div>
);


function App() {
  // マウスの座標
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // マウスイベントリスナが追加されることで、マウスが移動したときにmouseMoveListenerが実行される
    const mouseMoveListener = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    // マウント時：マウスイベントリスナを追加
    window.addEventListener("mousemove", mouseMoveListener);

    // アンマウント時：マウスイベントリスナを削除
    return () => {
      window.removeEventListener("mousemove", mouseMoveListener);
    };
  }, []);

  return (
    <div className="App">
      <Pointer name="pointer is-small" position={mousePosition} />
      <Pointer name="pointer" position={mousePosition} />
      <Pointer name="pointer is-large" position={mousePosition} />
    </div>
  );
}

export default App;