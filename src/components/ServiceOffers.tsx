import Link from "next/link";
import { serviceOffers } from "@/lib/service-offers";
import styles from "./ServiceOffers.module.css";

export default function ServiceOffers({ service }: { service?: string }) {
  const offers = serviceOffers.filter(offer => !service || offer.service === service);
  if (!offers.length) return null;
  const subject = service === "operations" ? "運用代行" : offers.length === 1 ? offers[0].name : "";
  return <div className={styles.offers}>
    <div>
      {offers.map((offer, index) => <article className={styles.row} key={offer.name}>
        <span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
        <div className={styles.content}>
          <p className={styles.name}>{offer.name}</p>
          <h3 className={styles.headline}>{offer.headline}</h3>
          <p className={styles.detail}>{offer.detail}</p>
        </div>
      </article>)}
    </div>
    <Link className={styles.link} href={subject ? `/contact?service=${encodeURIComponent(subject)}` : "/contact"}>
      {service === "operations" ? "運用について相談する" : "支援について相談する"}<span aria-hidden="true">↗</span>
    </Link>
  </div>;
}
