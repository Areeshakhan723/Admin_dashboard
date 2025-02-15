import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    const Islogged = localStorage.getItem("IsloggedIn"); // Check if the user is logged in by fetching 'IsloggedIn' from localStorage
    if (!Islogged) {
      router.push("/admin"); // Redirect to /admin if not logged in
    }
  }, [router]);

  return <div>{children}</div>;
};
export default Page;
