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

            setSuccess("Pendaftaran membership berhasil!");
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
        <section className="bg-orange-200 min-h-screen mt-20 pt-20">
            <div className="max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-lg">
                <h1 className="text-2xl font-bold text-center text-orange-600 mb-6">
                    Form Membership
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1 font-medium">Nama Lengkap</label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="w-full border p-2 rounded-lg"
                            placeholder="Masukkan nama anda"
                        />
                    </div>
                    {/* <div>
                        <label className="block mb-1 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="w-full border p-2 rounded-lg"
                            placeholder="Masukkan email anda"
                        />
                    </div> */}
                    <div>
                        <label className="block mb-1 font-medium">Nomor HP</label>
                        <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            required
                            className="w-full border p-2 rounded-lg"
                            placeholder="08xxxxxxxxxx"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Lokasi Outlet</label>
                        <select
                            name="address"
                            value={form.address}
                            onChange={handleChange}
                            required
                            className="w-full border p-2 rounded-lg"
                        >
                            <option value="">-- Pilih Lokasi Outlet --</option>
                            {outlets.map((outlet, idx) => (
                                <option key={idx} value={outlet}>
                                    {outlet}
                                </option>
                            ))}
                        </select>
                    </div>
                    {/* <div>
                        <label className="block mb-1 font-medium">Catatan</label>
                        <textarea
                            name="note"
                            value={form.note}
                            onChange={handleChange}
                            rows={3}
                            className="w-full border p-2 rounded-lg"
                            placeholder="Catatan tambahan"
                        />
                    </div> */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-orange-600 text-white py-2 rounded-lg font-semibold hover:bg-orange-700 transition"
                    >
                        {loading ? "Menyimpan..." : "Daftar Membership"}
                    </button>
                </form>

                {success && <p className="mt-4 text-green-600">{success}</p>}
                {error && <p className="mt-4 text-red-600">{error}</p>}
            </div>
        </section>
    );
}
