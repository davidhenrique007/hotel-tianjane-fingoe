import { NextRequest, NextResponse } from 'next/server';
import groq from '@/lib/groq';
import { siteConfig } from '@/data/site';
import { rooms } from '@/data/rooms';
import { services } from '@/data/services';

const systemPrompt = `Você é o assistente virtual do ${siteConfig.hotelName}, em ${siteConfig.location}.

Tipos de quarto disponíveis:
${rooms.map((r) => `- ${r.name}: ${r.capacity}, ${r.priceHint}`).join('\n')}

Serviços do hotel:
${services.map((s) => `- ${s.name}`).join('\n')}

REGRAS OBRIGATÓRIAS:
1. Responda APENAS sobre o Hotel Tianjane Fingoe.
2. Use SOMENTE as informações fornecidas acima.
3. NUNCA invente preços, disponibilidade, promoções ou avaliações.
4. Se perguntarem algo que não está nos dados, diga que não tem essa informação.
5. No final da conversa, SEMPRE encaminhe o cliente para os botões fixos "WhatsApp" ou "Telefone".
6. NUNCA peça para o cliente escrever manualmente o contacto.

Exemplo de resposta educada:
"Olá! Posso ajudar com informações sobre nossos quartos e serviços. Temos quartos Standard, Deluxe e Suíte Premium. Os preços são sob consulta. Gostaria de saber mais detalhes ou prefere falar diretamente com a nossa receção pelo WhatsApp ou telefone?"`;

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Mensagens inválidas' },
        { status: 400 }
      );
    }

    const completion = await groq.chat.completions.create({
      model: 'llama-3.1-8b-instant',  // ← MODELO ATUALIZADO
      messages: [
        { role: 'system', content: systemPrompt },
        ...messages,
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    const reply = completion.choices[0]?.message?.content || 'Desculpe, não consegui processar sua pergunta.';

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Erro no chat:', error);
    return NextResponse.json(
      { error: 'Erro interno no servidor' },
      { status: 500 }
    );
  }
}