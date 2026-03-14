import styles from './Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return <div className={styles.layout}>{children}</div>;
}

export function Container({ children }: LayoutProps) {
  return <div className={styles.container}>{children}</div>;
}

export function Section({ children }: LayoutProps) {
  return <section className={styles.section}>{children}</section>;
}
