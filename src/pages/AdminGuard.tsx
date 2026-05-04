import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from "firebase/auth";
import AdminPage from "@/pages/AdminPage";

export default function AdminGuard() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return unsub;
  }, []);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value;
    const password = (e.currentTarget.elements.namedItem("password") as HTMLInputElement).value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      alert(err.message);
    }
  };

  const handleLogout = () => signOut(auth);

  if (loading) return <div>Loading...</div>;
  if (!user) return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <form onSubmit={handleLogin} className="bg-card p-8 rounded-xl shadow-elevated w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6">Admin Login</h1>
        <input name="email" type="email" placeholder="Email" required className="w-full p-3 border rounded mb-4" />
        <input name="password" type="password" placeholder="Password" required className="w-full p-3 border rounded mb-6" />
        <button type="submit" className="w-full py-3 bg-primary text-white rounded-full font-bold">Sign In</button>
      </form>
    </div>
  );

  return (
    <>
      <div className="bg-black text-white p-2 flex justify-between items-center px-6">
        <span>Logged in as {user.email}</span>
        <button onClick={handleLogout} className="text-sm underline">Logout</button>
      </div>
      <AdminPage />
    </>
  );
}