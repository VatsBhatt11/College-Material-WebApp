"use client";

import Link from "next/link";
import styles from "./links.module.css";
import NavLink from "@/components/navbar/links/navLink/navLink";
import { useState } from "react";
import Image from "next/image";

const Links = () => {
  const [open, setOpen] = useState(false);

  const links = [
    {
      title: "HomePage",
      path: "/",
    },
    {
      title: "Resource",
      path: "/resource",
    },
  ];

  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title}>
            {link.title}
          </NavLink>
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logOut}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <Image
        className={styles.menuButton}
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
