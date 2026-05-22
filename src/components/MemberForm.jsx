import React from "react";

export default function MemberForm() {
  // 제약 사항: 파일명과 함수명 일치, Hooks 및 이벤트 핸들러 제거
  // 기존 CSS(.form-container)에 의해 기본적으로 숨김 처리됨
  return (
    <section className="form-container" id="formContainer">
      <form className="member-form" id="memberForm">
        <div className="form-row">
          <div className="form-group">
            <label>이름</label>
            <input type="text" placeholder="예: 홍아기사자" required />
          </div>
          <div className="form-group">
            <label>파트</label>
            <select defaultValue="Frontend" required>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Design">Design</option>
              <option value="PM">PM</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>관심 기술 (쉼표로 구분)</label>
          <input type="text" placeholder="예: JavaScript, React" required />
        </div>

        <div className="form-group">
          <label>한 줄 소개 (요약 카드)</label>
          <input type="text" placeholder="예: 무럭무럭 자라는 중!" required />
        </div>

        <div className="form-group">
          <label>자기소개 (상세 카드)</label>
          <textarea placeholder="세부 자기소개 내용을 작성하세요." required></textarea>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="예: lion@example.com" required />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="tel" placeholder="예: 010-1234-5678" required />
          </div>
        </div>

        <div className="form-group">
          <label>Website</label>
          <input type="url" placeholder="예: https://..." required />
        </div>

        <div className="form-group">
          <label>한 마디</label>
          <input type="text" placeholder="예: 끝까지 완주!" required />
        </div>

        <div className="form-actions">
          <button type="button" className="btn">랜덤 값 채우기</button>
          <button type="submit" className="btn btn-submit">추가하기</button>
          <button type="button" className="btn btn-cancel">취소</button>
        </div>
      </form>
    </section>
  );
}