"use client";

import React from "react";

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
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
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
    <div className="fixed inset-x-0 bottom-0 z-[1000]">
      <div className="mx-auto max-w-3xl m-4">
        <div className="rounded-xl border border-zinc-200/80 dark:border-zinc-700/80 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-lg p-4 md:p-5">
          <p className="text-sm md:text-[15px] leading-6">
            当サイトでは、サイトの基本機能および利便性向上のために Cookie を使用します。Cookie の利用に同意しますか？
          </p>
          <div className="mt-3 flex items-center justify-end gap-2">
            <button
              onClick={decline}
              className="px-3 py-2 rounded-lg border border-zinc-300 bg-white text-sm text-zinc-800 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-500"
            >
              拒否する
            </button>
            <button
              onClick={accept}
              className="px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-600"
            >
              同意する
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

