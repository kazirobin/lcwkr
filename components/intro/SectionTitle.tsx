interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-6">

      {subtitle && (
        <p className="text-sm uppercase tracking-[3px] text-red-600 font-semibold">
          {subtitle}
        </p>
      )}

      <h2 className="mt-2 text-3xl font-bold text-gray-900">
        {title}
      </h2>

      <div className="mt-3 h-1 w-20 rounded-full bg-red-600" />
    </div>
  );
}