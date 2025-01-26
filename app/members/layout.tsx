import Sheet from "@/app/_compornents/Sheet";
import Hero from "@/app/_compornents/Hero";

type Props = {
    children: React.ReactNode; // 子要素の型を定義
};

export default function RootLayout({ children }: Props) {
return (
    <>
    <Hero title="Memers" sub="メンバー"/> 
    <Sheet>{children}</Sheet>
       </>
);
}