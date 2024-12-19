
export default function InfoCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="border border-gray-300 p-4 rounded-lg">
      <h2 className="mb-2 text-lg font-semibold">{title}</h2>
      <p className="m-0">{description}</p>
    </div>
  );
}
