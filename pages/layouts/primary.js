export default function PrimaryLayout({ children }) {
  return (
    <>
      <header className="bg-slate-50 border-b border-black border-solid flex p-8 w-screen">
        <h1 className="font-medium text-black text-lg tracking-wide">
          CC ASSIGNMENT
        </h1>
      </header>
      <main className="bg-slate-50 p-8 w-screen">{children}</main>
    </>
  );
}
