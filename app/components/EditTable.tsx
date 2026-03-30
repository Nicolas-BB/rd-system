import { pgAccount } from "@/src/types/business";
import EditRow from "./EditRow";
import styles from "@/src/styles/components/table.module.css"

export default function EditTable({data}: {data: pgAccount[]}) {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Mínimo</th>
                    <th>Tipo</th>
                </tr>
            </thead>
            <tbody>
                {data.map((account) => (
                    <EditRow key={account.id} data={account}></EditRow>
                ))}
            </tbody>
        </table>
    )
}
