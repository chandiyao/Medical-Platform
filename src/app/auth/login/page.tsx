"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useI18n } from "@/hooks/useI18n";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const { t } = useI18n();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      // Get user profile to determine role
      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", data.user.id)
        .single();

      if (profileError) throw profileError;

      // Redirect based on role
      switch (profile.role) {
        case "admin":
          router.push("/admin");
          break;
        case "provider":
          router.push("/provider");
          break;
        case "patient":
        default:
          router.push("/patient");
          break;
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 bg-white/90 backdrop-blur-sm shadow-2xl border-0 ring-1 ring-slate-200/50">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-2xl font-bold shadow-lg">
              ME
            </div>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
            Welcome Back
          </h1>
          <p className="text-slate-600 mt-2">Sign in to your MediSEA account</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 backdrop-blur-sm focus:border-emerald-400 focus:ring-2 focus:ring-emerald-50 transition-all"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 backdrop-blur-sm focus:border-emerald-400 focus:ring-2 focus:ring-emerald-50 transition-all"
              placeholder="Enter your password"
              required
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
              {error}
            </div>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-slate-600">
            Don't have an account?{" "}
            <Link
              href="/auth/register"
              className="text-emerald-600 hover:text-emerald-700 font-semibold hover:underline"
            >
              Sign up here
            </Link>
          </p>
        </div>

        <div className="mt-6 p-4 bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-xl border border-emerald-100">
          <h3 className="font-semibold text-emerald-800 mb-2">Demo Accounts:</h3>
          <div className="space-y-1 text-sm text-emerald-700">
            <p><strong>Admin:</strong> admin@medisea.com / admin123</p>
            <p><strong>Provider:</strong> hospital@medisea.com / provider123</p>
            <p><strong>Patient:</strong> patient@medisea.com / patient123</p>
          </div>
        </div>
      </Card>
    </div>
  );
}