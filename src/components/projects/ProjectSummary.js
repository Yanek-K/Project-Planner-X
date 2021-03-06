import React from "react";

function ProjectSummary({ project }) {
  return (
    <div>
      <div className="card z-depth-0 project-summary">
        <div className="card-content gray-text text-darken-3">
          <span className="card-title">{project.title}</span>
          <p>Posted by the Net Ninja</p>
          <p className="grey-text">3rd September, 2am</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectSummary;
