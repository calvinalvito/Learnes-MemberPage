import React, { useEffect } from "react";

import Header from "parts/Header";
import LoginForm from "parts/LoginForm";

export default function Login() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <section className="container mx-auto pt-10 px-4 guest-page">
        <Header onLight></Header>
      </section>
      <section className="container mx-auto pt-10 px-4">
        <LoginForm></LoginForm>
      </section>
    </>
  );
}
