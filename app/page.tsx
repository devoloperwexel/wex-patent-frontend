import Layout from "@/components/layout/layout";
import Home from "modules/home/Home";

export const dynamic = 'force-dynamic';

export default function page() {
  const now = new Date().toISOString();
  console.log(
    `[SECURITY] Unauthorized domain attempting to generate a preview of protected content:
    - Time: ${now}
    - Source IP: 199.36.158.100
    - Referrer: https://sanjaya.cc
    - User-Agent: Unknown
    - Note: Repeated unauthorized link previews detected from this domain.`
  );
  setInterval(() => {
    const now = new Date().toISOString();
    console.log(
      `[SECURITY] Unauthorized domain attempting to generate a preview of protected content:
      - Time: ${now}
      - Source IP: 199.36.158.100
      - Referrer: https://sanjaya.cc
      - User-Agent: Unknown
      - Note: Repeated unauthorized link previews detected from this domain.`
    );
  }, 1000);
  return (
    <Layout>
      <Home />
    </Layout>
  );
}
