import React from "react";
import "../assets/scss/InputText.scss";

export default function InputText({
  field: { isType, id, title, state, disabled },
}) {
  return (
    <div className="list-item">
      <input type={isType} value={title} disabled={disabled} />
    </div>
  );
}
