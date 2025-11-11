export default function Card({ children }) {
  return (
    <div className="w-screen md:w-xl bg-slate-200 p-16 rounded-lg flex flex-col relative">
      {children}
    </div>
  );
}
