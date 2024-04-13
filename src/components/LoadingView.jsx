export default function LoadingView() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <img
        className="w-48 h-48 animate-spin"
        src="https://www.svgrepo.com/show/70469/loading.svg"
        alt="Loading icon"
      />
      <h2 className="text-slate-400 text-2xl md:text-4xl mt-12">Loading...</h2>
    </div>
  );
}
