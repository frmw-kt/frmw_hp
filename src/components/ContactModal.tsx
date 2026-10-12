"use client";

import { useEffect, useRef, useState } from "react";
import ContactForm from "./ContactForm";
import styles from "./ContactModal.module.css";

export default function ContactModal({ initialService = "" }: { initialService?: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const title = useRef<HTMLHeadingElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const show = () => {
      if (window.location.hash === "#message-consultation") {
        dialog.current?.showModal();
        title.current?.focus();
        setOpen(true);
      }
    };
    show();
    window.addEventListener("hashchange", show);
    return () => window.removeEventListener("hashchange", show);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => { document.documentElement.style.overflow = previous; };
  }, [open]);

  function close() { dialog.current?.close(); }
  return (
    <>
      <button ref={trigger} type="button" className="m-button" aria-haspopup="dialog" onClick={() => {
        dialog.current?.showModal();
        title.current?.focus();
        setOpen(true);
      }}>文面で相談する <span aria-hidden="true">↗</span></button>
      <dialog ref={dialog} className={styles.dialog} aria-labelledby="contact-modal-title" aria-describedby="contact-modal-description" data-lenis-prevent onClose={() => {
        setOpen(false);
        if (window.location.hash === "#message-consultation") {
          window.history.replaceState(null, "", window.location.pathname + window.location.search);
        }
        trigger.current?.focus();
      }}>
        <header className={styles.header}>
          <h2 ref={title} id="contact-modal-title" tabIndex={-1}>文面で相談する</h2>
          <button type="button" onClick={close} className={styles.close} aria-label="相談フォームを閉じる">閉じる <span aria-hidden="true">×</span></button>
        </header>
        <div className={styles.body}>
          <p id="contact-modal-description" className={styles.description}>現在のお困りごとや、相談したいことをお聞かせください。内容を確認し、メールでお返事します。</p>
          <p className={styles.hint}>面談の予約は不要です。この画面を閉じても、ページを離れるまでは入力内容が残ります。</p>
          <ContactForm initialService={initialService} />
          <p className={styles.hint}>顧客の個人情報やパスワードなど、機密情報の入力はお控えください。</p>
        </div>
      </dialog>
    </>
  );
}
