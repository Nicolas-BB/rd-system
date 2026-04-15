export async function getRdStationMessage(days: number): Promise<string> {
    const messages: Record<string, string> = {
        '7': 'Faltam 7 dias',
        '4': 'Faltam 4 dias',
        '1': 'Faltam 1 dia',
        '0': 'Hoje',
        '-1': 'Ontem',
        '-3': '3 dias atrás',
        '-4': '4 dias atrás',
        '-5': '5 dias atrás'
    }

    return messages[days.toString()]
}
