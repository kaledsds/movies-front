import { Header } from "@/components/blocs";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <main>
      <Header />
      <div>{children}</div>
    </main>
  );
};
