import { pool } from "../lib/db";
import { pgAccount } from "../types/business";

export async function upsertAccounts(data: pgAccount) {
    await pool.query(
        `UPDATE meta.balances
        SET minimum=$1, type=$2
        WHERE id=$3`,
        [data.minimum, data.type, data.id]
        )
}
