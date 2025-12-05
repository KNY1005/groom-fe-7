import MemoList from "../MemoList.jsx";
import SideBarFooter from "../SideBarFooter.jsx";
import SideBarHeader from "../SideBarHeader/index.jsx";
import "./index.css"
export default function SideBar({
  memos,
  selectedMemoIndex,
  setSelectedMemoIndex,
  onAddMemo,
  onMemoDeleteClick,
}) {
  return (
    <div className="SideBar">
      <SideBarHeader />
      <MemoList
        memos={memos}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
        onMemoDeleteClick={onMemoDeleteClick}
      />
      <SideBarFooter onAddMemo={onAddMemo} />
    </div>
  );
}
