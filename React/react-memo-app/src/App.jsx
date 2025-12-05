import MemoContainer from "./components/MemoContainer";
import SideBar from "./components/SideBar";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [memos, setMemos] = useState([
    {
      title: "memo 1",
      content: "memo 1 content",
      createAt: 1743920753833, // 시간 값 (생성 시간) new Date().getTime()
      updateAt: 1743920753833, // 시간 값 (수정 시간)
    },
    {
      title: "memo 2",
      content: "memo 2 content",
      createAt: 1743920753833, // 시간 값 (생성 시간) new Date().getTime()
      updateAt: 1743920753833, // 시간 값 (수정 시간)
    },
  ]);
  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);


  const handleMemoChange = (newMemo) => {
    const newMemos = [...memos];
    newMemos[selectedMemoIndex] = newMemo;
    setMemos(newMemos);
    
    localStorage.setItem("memos", JSON.stringify(newMemos));
  };

  const handleAddMemo = () => {
    const now = new Date().getTime();
    const newMemo = {
      title: "Untitled",
      content: "",
      createAt: now,
      updateAt: now,
    };
    setMemos([...memos, newMemo]);
    setSelectedMemoIndex(memos.length);
  };

  const handleDeleteMemo = (deleteMemoIndex) => {
    const newMemos = memos.filter((_, index) => index !== deleteMemoIndex);
    setMemos(newMemos);
    if (deleteMemoIndex === selectedMemoIndex) {
      setSelectedMemoIndex(0);
    } else if (selectedMemoIndex > deleteMemoIndex) {
      setSelectedMemoIndex(selectedMemoIndex - 1);
    }
  };

  return (
    <div className="App">
      <SideBar
        memos={memos}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
        onAddMemo={handleAddMemo}
        onMemoDeleteClick={handleDeleteMemo}
      />
      <MemoContainer
        memo={memos[selectedMemoIndex]}
        onMemoChange={handleMemoChange}
      />
    </div>
  );
}
