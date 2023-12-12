import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // マウスX座標
  const [mouseX, setMouseX] = useState(0);
  // マウスY座標
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    // マウスイベントリスナが追加されることで、マウスが移動したときにmouseMoveListenerが実行される
    const mouseMoveListener = (event) => {
      setMouseX(event.clientX);
      setMouseY(event.clientY);
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
      <div
        className="pointer is-large"
        style={{
          transform: `translate(${mouseX}px, ${mouseY}px)`,
        }}
      ></div>
      <div
        className="pointer"
        style={{ transform: `translate(${mouseX}px, ${mouseY}px)` }}
      ></div>
      <div
        className="pointer is-small"
        style={{ transform: `translate(${mouseX}px, ${mouseY}px)` }}
      ></div>
      <main>
      </main>
    </div>
  );
}

export default App;