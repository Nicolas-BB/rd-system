import { pgAccount } from '@/src/types/business'
import { useState } from 'react'

export default function Row({ data }: { data: pgAccount }) {
    const [minimum, setMinimum] = useState<number | ''>(data.minimum ?? '')
    const [type, setType] = useState<string>(data.type ?? '')

    return (
        <tr>
            <td><p>{data.id}</p></td>
            <td><p>{data.name}</p></td>
            {/* <td><p>{data.minimum ?? '-'}</p></td> */}
            <td>
                <input
                    type="number"
                    value={minimum}
                    placeholder='Informe o valor'
                    onChange={(e) => setMinimum(e.target.value === '' ? '' : Number(e.target.value))}
                />
            </td>
            <td>
                <select
                    name="type"
                    id="type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                >
                    <option value="" disabled>Selecione o tipo</option>
                    <option value="pix">Pix</option>
                    <option value="card">Cartão</option>
                </select>
            </td>
        </tr>
    )
}
