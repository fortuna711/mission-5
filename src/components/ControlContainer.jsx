import React from "react";

export default function ControlContainer({ totalCount }) {
  // 파일명과 함수명 일치 준수
  return (
    <div className="control-container">
      <div className="control-bar">
        <button className="btn">아기 사자 추가</button>
        <button className="btn">마지막 아기 사자 삭제</button>
        <span className="total-count">총 {totalCount}명</span>
      </div>

      <div className="control-bar sub-bar">
        <button className="btn">랜덤 1명 추가</button>
        <button className="btn">랜덤 5명 추가</button>
        <button className="btn">전체 새로고침</button>
        <span className="status-text">준비 완료</span>
      </div>

      <div className="filter-bar">
        <div className="filter-group">
          <label>파트</label>
          <select defaultValue="전체">
            <option value="전체">전체</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Design">Design</option>
            <option value="PM">PM</option>
          </select>
        </div>
        <div className="filter-group">
          <label>정렬</label>
          <select defaultValue="latest">
            <option value="latest">최신추가순</option>
            <option value="name">이름순</option>
          </select>
        </div>
        <div className="filter-group search-group">
          <label>검색</label>
          <input type="text" placeholder="이름으로 검색" />
        </div>
      </div>
    </div>
  );
}