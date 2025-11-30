"use client";
import { useEffect, useState } from "react";
import { api_endpoints } from "../api/api";
import axios from "axios";

interface LokasiOutletItem {
    id: number;
    location: string;
    link: string;
}

export default function MembershipPage() {
    const [lokasiOutletItems, setLokasiOutletItems] = useState<LokasiOutletItem[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        axios.get(api_endpoints.GETOUTLET)
            .then(response => {
                setLokasiOutletItems(response.data.data);
            })
            .catch(error => {
                console.error("Error fetching outlet locations:", error);
            })
            .finally(() => setIsLoading(false));
    }, []);

    const [form, setForm] = useState({
        name: "",
        no_wa: "",
        outlet_id: "", // Changed from 'outlet' to 'outlet_id'
        address: ""
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
            const res = await fetch(api_endpoints.POSTMEMBER, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || "Gagal menyimpan data");
            }

            setSuccess("Pendaftaran membership berhasil!");
            setForm({
                name: "",
                no_wa: "",
                outlet_id: "", // Reset to empty string
                address: ""
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
                            className="w-full border p-3 rounded-lg"
                            placeholder="Masukkan nama anda"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium text-gray-700">
                            Alamat
                        </label>
                        <input
                            type="text"
                            name="address"
                            value={form.address}
                            onChange={handleChange}
                            required
                            className="w-full border p-3 rounded-lg"
                            placeholder="Masukkan alamat rumah"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium text-gray-700">
                            Nomor WhatsApp Aktif
                        </label>
                        <input
                            type="tel"
                            name="no_wa"
                            value={form.no_wa}
                            onChange={handleChange}
                            required
                            className="w-full border p-3 rounded-lg"
                            placeholder="08xxxxxxxxxx"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium text-gray-700">
                            Lokasi Outlet
                        </label>
                        <select
                            name="outlet_id" // Changed from 'outlet' to 'outlet_id'
                            value={form.outlet_id}
                            onChange={handleChange}
                            required
                            className="w-full border p-3 rounded-lg"
                        >
                            {isLoading ? (
                                <option>Memuat outlet...</option>
                            ) : (
                                <>
                                    <option value="">-- Pilih Lokasi Outlet --</option>
                                    {lokasiOutletItems.map((item) => (
                                        <option key={item.id} value={item.id}> {/* Use item.id as value */}
                                            {item.location}
                                        </option>
                                    ))}
                                </>
                            )}
                        </select>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 disabled:bg-orange-400 transition-colors"
                    >
                        {loading ? "Menyimpan..." : "Daftar Membership"}
                    </button>
                </form>

                {success && <div className="mt-6 p-3 rounded-lg bg-green-100 text-green-700">{success}</div>}
                {error && <div className="mt-6 p-3 rounded-lg bg-red-100 text-red-700">{error}</div>}
            </div>
        </section>
    );
}