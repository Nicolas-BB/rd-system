import { getBusinesses } from "@/src/services/getBusinesses";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const data = await getBusinesses();
        return NextResponse.json(data.data || []);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Falha ao buscar BMs' }, { status: 500 });
    }
}
