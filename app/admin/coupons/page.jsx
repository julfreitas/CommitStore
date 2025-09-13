'use client'
import { useEffect, useState } from "react"
import { format } from "date-fns"
import toast from "react-hot-toast"
import { DeleteIcon } from "lucide-react"
import { couponDummyData } from "@/assets/assets"

export default function AdminCoupons() {

    const [coupons, setCoupons] = useState([])

    const [newCoupon, setNewCoupon] = useState({
        code: '',
        description: '',
        discount: '',
        forNewUser: false,
        forMember: false,
        isPublic: false,
        expiresAt: new Date()
    })

    const fetchCoupons = async () => {
        setCoupons(couponDummyData)
    }

    const handleAddCoupon = async (e) => {
        e.preventDefault()
        // Lógica para adicionar um cupom
    }

    const handleChange = (e) => {
        setNewCoupon({ ...newCoupon, [e.target.name]: e.target.value })
    }

    const deleteCoupon = async (code) => {
        // Lógica para deletar um cupom
    }

    useEffect(() => {
        fetchCoupons();
    }, [])

    return (
        <div className="text-slate-500 mb-40">

            {/* Adicionar Cupom */}
            <form onSubmit={(e) => toast.promise(handleAddCoupon(e), { loading: "Adicionando cupom..." })} className="max-w-sm text-sm">
                <h2 className="text-2xl">Adicionar <span className="text-slate-800 font-medium">Cupons</span></h2>
                <div className="flex gap-2 max-sm:flex-col mt-2">
                    <input
                        type="text"
                        placeholder="Código do cupom"
                        className="w-full mt-2 p-2 border border-slate-200 outline-slate-400 rounded-md"
                        name="code"
                        value={newCoupon.code}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="number"
                        placeholder="Desconto do cupom (%)"
                        min={1}
                        max={100}
                        className="w-full mt-2 p-2 border border-slate-200 outline-slate-400 rounded-md"
                        name="discount"
                        value={newCoupon.discount}
                        onChange={handleChange}
                        required
                    />
                </div>
                <input
                    type="text"
                    placeholder="Descrição do cupom"
                    className="w-full mt-2 p-2 border border-slate-200 outline-slate-400 rounded-md"
                    name="description"
                    value={newCoupon.description}
                    onChange={handleChange}
                    required
                />

                <label>
                    <p className="mt-3">Data de validade do cupom</p>
                    <input
                        type="date"
                        placeholder="Vencimento do cupom"
                        className="w-full mt-1 p-2 border border-slate-200 outline-slate-400 rounded-md"
                        name="expiresAt"
                        value={format(newCoupon.expiresAt, 'yyyy-MM-dd')}
                        onChange={handleChange}
                    />
                </label>

                <div className="mt-5">
                    <div className="flex gap-2 mt-3">
                        <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                name="forNewUser"
                                checked={newCoupon.forNewUser}
                                onChange={(e) => setNewCoupon({ ...newCoupon, forNewUser: e.target.checked })}
                            />
                            <div className="w-11 h-6 bg-slate-300 rounded-full peer peer-checked:bg-green-600 transition-colors duration-200"></div>
                            <span className="dot absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                        </label>
                        <p>Para novos usuários</p>
                    </div>
                    <div className="flex gap-2 mt-3">
                        <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                name="forMember"
                                checked={newCoupon.forMember}
                                onChange={(e) => setNewCoupon({ ...newCoupon, forMember: e.target.checked })}
                            />
                            <div className="w-11 h-6 bg-slate-300 rounded-full peer peer-checked:bg-green-600 transition-colors duração-200"></div>
                            <span className="dot absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                        </label>
                        <p>Para membros</p>
                    </div>
                </div>
                <button className="mt-4 p-2 px-10 rounded bg-slate-700 text-white active:scale-95 transition">
                    Adicionar cupom
                </button>
            </form>

            {/* Listar Cupons */}
            <div className="mt-14">
                <h2 className="text-2xl">Listar <span className="text-slate-800 font-medium">Cupons</span></h2>
                <div className="overflow-x-auto mt-4 rounded-lg border border-slate-200 max-w-4xl">
                    <table className="min-w-full bg-white text-sm">
                        <thead className="bg-slate-50">
                            <tr>
                                <th className="py-3 px-4 text-left font-semibold text-slate-600">Código</th>
                                <th className="py-3 px-4 text-left font-semibold text-slate-600">Descrição</th>
                                <th className="py-3 px-4 text-left font-semibold text-slate-600">Desconto</th>
                                <th className="py-3 px-4 text-left font-semibold text-slate-600">Válido até</th>
                                <th className="py-3 px-4 text-left font-semibold text-slate-600">Novo usuário</th>
                                <th className="py-3 px-4 text-left font-semibold text-slate-600">Para membro</th>
                                <th className="py-3 px-4 text-left font-semibold text-slate-600">Ação</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                            {coupons.map((coupon) => (
                                <tr key={coupon.code} className="hover:bg-slate-50">
                                    <td className="py-3 px-4 font-medium text-slate-800">{coupon.code}</td>
                                    <td className="py-3 px-4 text-slate-800">{coupon.description}</td>
                                    <td className="py-3 px-4 text-slate-800">{coupon.discount}%</td>
                                    <td className="py-3 px-4 text-slate-800">{format(coupon.expiresAt, 'yyyy-MM-dd')}</td>
                                    <td className="py-3 px-4 text-slate-800">{coupon.forNewUser ? 'Sim' : 'Não'}</td>
                                    <td className="py-3 px-4 text-slate-800">{coupon.forMember ? 'Sim' : 'Não'}</td>
                                    <td className="py-3 px-4 text-slate-800">
                                        <DeleteIcon
                                            onClick={() => toast.promise(deleteCoupon(coupon.code), { loading: "Excluindo cupom..." })}
                                            className="w-5 h-5 text-red-500 hover:text-red-800 cursor-pointer"
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
