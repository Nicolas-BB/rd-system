export async function sendMessageCloudAPI(phone: string, template: string) {
    const url: string = 'https://graph.facebook.com/v25.0/1094418117077144/messages'
    const token: string = process.env.WHATSAPP_TOKEN || ''

    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                messaging_product: 'whatsapp',
                to: phone,
                type: 'template',
                template: {
                    name: template,
                    language: {
                        code: 'pt_BR'
                    }
                }
            })
        })

        if (!res.ok) {
            throw new Error(`Erro na API CloudAPI: ${res.statusText}`)
        }

        return { success: true }
    } catch (error) {
        return { success: false, error: (error as Error).message }
    }
}
