import { api } from "@/lib/api";

export const dynamic = "force-dynamic";

export default async function Home() {
  const data = await api.timestamp();

  return (
    <main >
      <div >
        <h1>
          Nextjs starter project
        </h1>
        <p>{data.timestamp}</p>
      </div>
    </main>
  );
}