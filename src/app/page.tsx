import OpenWithId from '../components/open-with-id';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold">Welcome to Quizzler</h1>
      <OpenWithId />
    </main>
  );
}
