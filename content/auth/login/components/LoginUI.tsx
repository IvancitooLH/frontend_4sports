export function LoginUI({
  icon,
  title,
  body,
  image,
}: {
  icon: React.ReactNode;
  title: string;
  body: React.ReactNode;
  image: React.ReactNode;
}) {
  return (
    <div className="max-h-dvh h-dvh w-full overflow-y-auto overflow-x-hidden flex">
      <div className="relative w-full h-full lg:block hidden">
        <div className="absolute top-0 left-0 z-10 w-full h-full bg-linear-to-r from-black/30 to-transparent" />
        {image}
      </div>

      <div className="h-full lg:w-1/3 w-full flex items-center px-10 lg:min-w-1/3">
        <div className="w-full h-fit">
          <div className="w-24 m-auto mb-2">{icon}</div>
          <h1 className="font-medium text-lg mb-6 text-center">{title}</h1>

          {body}
        </div>
      </div>
    </div>
  );
}
