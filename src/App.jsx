import React from "react";
import { LIONS_DATA } from "./data/lions";
import ControlContainer from "./components/ControlContainer";
import MemberForm from "./components/MemberForm"; // 추가 폼 포함
import SummaryGrid from "./components/SummaryGrid";
import DetailList from "./components/DetailList";

export default function App() {
  const members = LIONS_DATA;

  return (
    <main className="page-wrapper">
      <h1 className="page-title">멋쟁이사자처럼 아기 사자 명단</h1>

      {/* 1. 상단 컨트롤 영역 */}
      <ControlContainer totalCount={members.length} />

      {/* 4. 아기 사자 추가 폼 (컨트롤 하단 위치, CSS 클래스로 정적 숨김 제어) */}
      <MemberForm />

      {/* 5. 중단 요약 카드 그리드 영역 */}
      <SummaryGrid members={members} />

      {/* 6. 하단 상세 정보 목록 영역 */}
      <section className="detail-list-container">
        <h2 className="section-title">아기 사자 상세 프로필</h2>
        <DetailList members={members} />
      </section>
    </main>
  );
}