import { Section, ServiceCards } from "@/components/Marketing";
import styles from "./patterns.module.css";

const groups = [
  { name: "マーケティング支援のサービス", slugs: ["consulting", "operations", "production"] },
  { name: "業務改善支援のサービス", slugs: ["business-improvement", "app-development", "ai"] },
];

/** 色・文字・装飾は公開サイトの ServiceCards / Section をそのまま使用する。 */
export default function ServicePatterns({ pattern }: { pattern: number }) {
  const layouts = [styles.compact, styles.columns, styles.sideHeading, styles.threeColumns, styles.informationColumns];
  return (
    <Section
      id="service-pattern"
      eyebrow="02 / SERVICES"
      title="売上と業務、二つの側面から支える"
      text="集客・受注の改善と、日々の作業・支出の削減。目的に合わせた入口からご相談いただけます。"
      tone="m-tint"
      className={`${styles.pattern} ${layouts[pattern - 1]}`}
    >
      <div className={styles.groups}>
        {groups.map((group) => (
          <div className={styles.group} key={group.name}>
            <h3 className={`m-subheading ${styles.groupHeading}`}>{group.name}</h3>
            <ServiceCards slugs={group.slugs} />
          </div>
        ))}
      </div>
    </Section>
  );
}
