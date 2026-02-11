interface PageLayoutProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function PageLayout({ title, description, children }: PageLayoutProps) {
  return (
    <section className="flex flex-col w-full overflow-hidden">
      <div className="space-y-4 mb-6">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          {title}
        </h1>
        {description && (
          <p className="text-lg text-muted-foreground">{description}</p>
        )}
      </div>
      <div className="w-full overflow-hidden">{children}</div>
    </section>
  );
}
