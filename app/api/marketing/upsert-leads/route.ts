import { upsertLead } from "@/src/repositories/upsertLeadInfo"
import { sendMessage } from "@/src/services/sendMessage"
import type { LeadInfo } from "@/src/types/rdStation"
import type { LeadsReq } from "@/src/types/rdStation"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    const res: LeadsReq = await req.json()

    if (!res.leads?.[0]?.personal_phone || !res.leads?.[0]?.name) return NextResponse.json({ success: false, error: 'Dados inválidos' })

    const data: LeadInfo = {
        phone: res.leads?.[0].personal_phone!,
        name: res.leads?.[0].name!
    }

    upsertLead(data)

    if (res.leads[0].personal_phone === '5543998077983') {
        await sendMessage('5543998077983', 'Lead recebido!')
    }

    return NextResponse.json({ ok: true })
}
