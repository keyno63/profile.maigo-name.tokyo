"use client";

import React from "react";
import styles from "./Button.module.css";

const COOKIE_NAME = "cookie_consent";
const CONSENT_ACCEPTED = "accepted";
const CONSENT_DECLINED = "declined";
const CONSENT_MAX_AGE_DAYS = 365;

function setCookie(name: string, value: string, days: number) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "; expires=" + date.toUTCString();
  const secure = typeof window !== "undefined" && window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${name}=${encodeURIComponent(value)}${expires}; Path=/; SameSite=Lax${secure}`;
}

function getCookie(name: string) {
  const nameEQ = name + "=";
  const parts = document.cookie.split(";");
  for (let i = 0; i < parts.length; i++) {
    let c = parts[i];
    while (c.charAt(0) === " ") c = c.substring(1);
    if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length));
  }
  return undefined;
}

export default function CookieConsentClient() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("consent") === "reset") {
      document.cookie = `${COOKIE_NAME}=; Max-Age=0; Path=/`;
    }
    const consent = getCookie(COOKIE_NAME);
    if (!consent || params.get("consent") === "force") {
      setOpen(true);
    }
  }, []);

  const accept = () => {
    setCookie(COOKIE_NAME, CONSENT_ACCEPTED, CONSENT_MAX_AGE_DAYS);
    setOpen(false);
  };

  const decline = () => {
    setCookie(COOKIE_NAME, CONSENT_DECLINED, CONSENT_MAX_AGE_DAYS);
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.card}>
          <p className={styles.textBody}>
            当サイトでは、サイトの基本機能および利便性向上のために Cookie を使用します。
            現時点ではCookieを利用していませんが、将来的に利用する可能性があります。
            Cookie の利用に同意しますか？
          </p>
          <div className={styles.actions}>
            <button onClick={decline} className={styles.denyButton}>拒否する</button>
            <button onClick={accept} className={styles.acceptButton}>同意する</button>
          </div>
        </div>
      </div>
    </div>
  );
}

