"use client";
import { useState } from "react";

export default function MembershipPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        note: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            const res = await fetch("/api/membership", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (!res.ok) throw new Error("Gagal menyimpan data");

            setSuccess("🎉 Pendaftaran membership berhasil!");
            setForm({
                name: "",
                email: "",
                phone: "",
                address: "",
                note: "",
            });
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Terjadi kesalahan yang tidak diketahui");
            }
        } finally {
            setLoading(false);
        }
    };

    const outlets = [
        "Outlet Trunojoyo, Kota Madiun",
        "Outlet Mastrip, Kota Madiun",
        "Outlet Winongo, Kota Madiun",
        "Outlet Jiwan, Kabupaten Madiun",
        "Outlet Taman Praja, Kota Madiun",
        "Outlet Caruban, Kabupaten Madiun",
        "Outlet Gorang - Gareng Jl. Bhayangkara, Kabupaten Magetan",
        "Outlet Maospati, Kabupaten Magetan",
        "Outlet Ngawi Jl. Trunojoyo Kabupaten Ngawi",
        "Outlet Ponorogo, Kabupaten Ponorogo"
    ];

    return (
        <section className="bg-gradient-to-b from-orange-100 to-orange-200 min-h-screen flex items-center justify-center py-16 px-4">
            <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-xl pt-10 mt-10">
                <h1 className="text-3xl font-bold text-center text-orange-600">
                    Form Membership
                </h1>
                <p className="text-center text-gray-500 mt-2 mb-8">
                    Daftar sekarang dan nikmati berbagai keuntungan dari membership kami.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block mb-1 font-medium text-gray-700">
                            Nama Lengkap
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none transition"
                            placeholder="Masukkan nama anda"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium text-gray-700">
                            Nomor WhatsApp Aktif
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            required
                            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none transition"
                            placeholder="08xxxxxxxxxx"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium text-gray-700">
                            Lokasi Outlet
                        </label>
                        <select
                            name="address"
                            value={form.address}
                            onChange={handleChange}
                            required
                            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none appearance-auto transition"
                        >
                            <option value="">-- Pilih Lokasi Outlet --</option>
                            {outlets.map((outlet, idx) => (
                                <option key={idx} value={outlet}>
                                    {outlet}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 focus:ring-2 focus:ring-orange-500 transition disabled:opacity-60"
                    >
                        {loading ? "Menyimpan..." : "Daftar Membership"}
                    </button>
                </form>

                {success && (
                    <div className="mt-6 p-3 rounded-lg bg-green-100 text-green-700 text-center font-medium">
                        {success}
                    </div>
                )}
                {error && (
                    <div className="mt-6 p-3 rounded-lg bg-red-100 text-red-700 text-center font-medium">
                        {error}
                    </div>
                )}
            </div>
        </section>
    );
}
