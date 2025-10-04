"use client";

import React, { useState } from "react";

interface CartItem {
    title: string;
    price: number;
    qty: number;
}

interface CartModalProps {
    cart: CartItem[];
    isOpen: boolean;
    onClose: () => void;
}

export default function CartModal({ cart, isOpen, onClose }: CartModalProps) {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        note: "",
        delivery: "pickup", // default Ambil di Tempat
        address: "",
        branch: "", // cabang
    });

    const branches = [
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

    if (!isOpen) return null;

    const formatRupiah = (value: number) =>
        `Rp${value.toLocaleString("id-ID")}`;

    const total = cart.reduce((acc, i) => acc + i.price * i.qty, 0);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const menuList = cart.map((i) => `${i.title} x ${i.qty}`).join("\n");

        const message = `Halo, saya ingin pesan:

Nama: ${form.name}
Nomor HP: ${form.phone}
Metode Pengiriman: ${form.delivery === "pickup" ? "Ambil di Tempat" : "Antar ke Alamat"}
${form.delivery === "pickup" ? `Cabang: ${form.branch}` : ""}
${form.delivery === "delivery" ? `Alamat: ${form.address}` : ""}
Pesanan:
${menuList}
Catatan: ${form.note}

Total: ${formatRupiah(total)}
        `;

        const waLink = `https://wa.me/6282337995558?text=${encodeURIComponent(
            message
        )}`;
        window.open(waLink, "_blank");
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white w-full max-w-lg p-6 rounded-2xl shadow-lg overflow-y-auto max-h-[90vh] relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl font-bold"
                >
                    <i className="ri-close-large-fill"></i>
                </button>

                <h1 className="text-2xl font-bold text-center text-orange-600 mb-6">
                    Keranjang Saya
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1 font-bold">Nama Lengkap</label>
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

                    <div>
                        <label className="block mb-1 font-bold">Nomor HP</label>
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

                    {cart.length === 0 ? (
                        <p className="text-gray-500 text-center mb-6">
                            Belum ada pesanan
                        </p>
                    ) : (
                        <>
                            <div className="space-y-3 mb-4">
                                {cart.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="flex justify-between items-center border-b pb-2 border-gray-300"
                                    >
                                        <div>
                                            <p className="font-medium">{item.title}</p>
                                            <p className="text-sm text-gray-500">
                                                {formatRupiah(item.price)} x {item.qty}
                                            </p>
                                        </div>
                                        <p className="font-semibold text-orange-600">
                                            {formatRupiah(item.price * item.qty)}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-between font-bold text-lg mb-6">
                                <span>Total</span>
                                <span>{formatRupiah(total)}</span>
                            </div>
                        </>
                    )}

                    {/* Opsi Metode Pengiriman */}
                    <div>
                        <label className="block mb-1 font-bold">Metode Pengiriman</label>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="delivery"
                                    value="pickup"
                                    checked={form.delivery === "pickup"}
                                    onChange={handleChange}
                                />
                                Ambil di Tempat
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="delivery"
                                    value="delivery"
                                    checked={form.delivery === "delivery"}
                                    onChange={handleChange}
                                />
                                Antar ke Alamat
                            </label>
                        </div>
                    </div>

                    {/* Jika pilih Antar ke Alamat */}
                    {form.delivery === "delivery" && (
                        <div>
                            <label className="block mb-1 font-bold">Alamat Lengkap</label>
                            <textarea
                                name="address"
                                value={form.address}
                                onChange={handleChange}
                                rows={2}
                                required={form.delivery === "delivery"}
                                className="w-full border p-2 rounded-lg"
                                placeholder="Masukkan alamat lengkap untuk pengantaran"
                            />
                            <p className="mt-1 text-sm text-gray-500">
                                <i className="ri-truck-line text-blue-700 text-2xl"></i> Gratis ongkir untuk minimal pembelian Rp50.000 (khusus area Kota Madiun)
                            </p>
                        </div>
                    )}

                    {/* Jika pilih Ambil di Tempat */}
                    {form.delivery === "pickup" && (
                        <div>
                            <label className="block mb-1 font-bold">Pilih Cabang</label>
                            <select
                                name="branch"
                                value={form.branch}
                                onChange={handleChange}
                                required={form.delivery === "pickup"}
                                className="w-full border p-2 rounded-lg"
                            >
                                <option value="">-- Pilih Cabang --</option>
                                {branches.map((b, idx) => (
                                    <option key={idx} value={b}>
                                        {b}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}

                    <div>
                        <label className="block mb-1 font-medium">Catatan</label>
                        <textarea
                            name="note"
                            value={form.note}
                            onChange={handleChange}
                            rows={3}
                            className="w-full border p-2 rounded-lg"
                            placeholder="Contoh: tanpa saos, pedas sedang, dll."
                        />
                    </div>

                    <div className="flex justify-end gap-2 pt-4">
                        <button
                            type="submit"
                            className="px-4 py-2 rounded bg-orange-600 text-white hover:bg-orange-700"
                        >
                            Order via WhatsApp
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
