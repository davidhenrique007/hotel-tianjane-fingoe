import Groq from 'groq-sdk';

// Durante o build, usa dummy key; em runtime, usa a chave real
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY || 'dummy-key-for-build',
});

export default groq;