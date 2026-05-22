import React from "react";

export default function DetailList({ members }) {
  // 파일명과 함수명 일치 준수
  return (
    <div id="detailList">
      {members.map((member) => (
        <div className="detail-card" id={member.id} key={member.id}>
          <header className="detail-card-header">
            <h3>{member.name}</h3>
            <p className="detail-part">{member.part}</p>
            <p className="detail-track">LION TRACK</p>
          </header>
          <div className="detail-card-body">
            <div className="detail-section">
              <h4>자기소개</h4>
              <p>{member.fullIntro}</p>
            </div>

            <div className="detail-section">
              <h4>연락처</h4>
              <ul>
                <li>Email: {member.email}</li>
                <li>Phone: {member.phone}</li>
                <li>
                  <a href={member.website || "https://www.lionexample.com"} target="_blank" rel="noreferrer">
                    {member.website || "https://www.lionexample.com"}
                  </a>
                </li>
              </ul>
            </div>

            <div className="detail-section">
              <h4>관심 기술</h4>
              <ul>
                {member.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>

            <div className="detail-section">
              <h4>한 마디</h4>
              <p>{member.motto}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}