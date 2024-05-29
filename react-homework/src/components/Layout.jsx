import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <h1>할 일 목록</h1>
      </header>
      <main> {children}</main>
      <footer
        style={{
          position: "fixed",
          bottom: 0,
        }}
      >
        <h4>만든이 : 황승현</h4>
      </footer>
    </>
  );
};

export default Layout;
