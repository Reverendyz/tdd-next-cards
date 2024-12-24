export default function InfoCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="border rounded-md p-6 shadow-md hover:shadow-xl transition-shadow">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
