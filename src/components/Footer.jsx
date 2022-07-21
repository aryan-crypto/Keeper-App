import React from "react";
function Footer() {
  const dt = new Date();
  const year = dt.getFullYear();
  return (
    <footer>
      <p>Copyright © {year}</p>
    </footer>
  );
}
export default Footer;
