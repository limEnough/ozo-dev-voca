interface DeshboardLayoutProps {
  children: React.ReactNode;
}

export default function DeshboardLayout({children}: DeshboardLayoutProps) {
  return (
    <section className="deshbord-layout">
      {children}
    </section>  
  );
}
