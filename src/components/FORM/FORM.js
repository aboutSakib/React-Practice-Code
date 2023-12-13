import React, { useState } from "react";
import styles from "./form.module.css";

function FORM() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = user;

  const handleChage = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    alert("form submitted");

    console.log(user);
    e.preventDefault();
  };
  return (
    <div>
      <h1 className={styles.header}>Registration</h1>
      <form className={styles.form_content} action="" onSubmit={handleSubmit}>
        <div className={styles.form_group}>
          <label className={styles.labeleContent} htmlFor="name">
            Name:
          </label>
          <input
            className={styles.inputContent}
            type="text"
            name="name"
            value={name}
            required
            onChange={handleChage}
          />
        </div>
        <div className={styles.form_group}>
          <label className={styles.labeleContent} htmlFor="email">
            Email:
          </label>
          <input
            className={styles.inputContent}
            type="email"
            name="email"
            value={email}
            onChange={handleChage}
            required
          />
        </div>
        <div className={styles.form_group}>
          <label className={styles.labeleContent} htmlFor="password">
            Password:
          </label>
          <input
            className={styles.inputContent}
            type="password"
            name="password"
            value={password}
            onChange={handleChage}
            required
          />
        </div>
        <div className={styles.form_group}>
          <button className={styles.btn} type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default FORM;
