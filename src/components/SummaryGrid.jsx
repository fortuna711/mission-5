import React from "react";

export default function SummaryGrid({ members }) {
  // 파일명과 함수명 일치 준수
  return (
    <section className="summary-grid" id="summaryGrid">
      {members.map((member) => (
        <article
          key={member.id}
          className="profile-card"
          data-id={member.id}
          data-is-mine={member.isMine ? "true" : "false"}
        >
          <div className="image-box">
            <img src={member.image} alt={member.name} />
            <span className="badge">{member.badge}</span>
          </div>
          <div className="summary-content">
            <h2 className="summary-name">{member.name}</h2>
            <p className="summary-part">{member.part}</p>
            <p className="summary-intro">{member.intro}</p>
          </div>
        </article>
      ))}
    </section>
  );
}