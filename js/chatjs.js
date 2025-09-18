const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const optionBtns = document.querySelectorAll(".option-btn");

// Lista de materiais com palavras relacionadas
const respostas = [
  // --- Conversa normal ---
  {
    chaves: ["oi", "olá", "ei", "eae", "bom dia", "boa tarde", "boa noite"],
    resposta: "👋 Olá! Eu sou o EcoBot! Me diga um material e eu ensino onde descartar corretamente. 🌱"
  },
  {
    chaves: ["tudo bem", "como você está", "como vai"],
    resposta: "😊 Estou ótimo, cuidando do planeta! E você, pronto(a) para aprender a descartar o lixo corretamente? ♻️"
  },
  {
    chaves: ["quem é você", "o que você faz", "quem é vc", "qual seu nome"],
    resposta: "🤖 Eu sou o **EcoBot**, um assistente de reciclagem! Pergunte sobre qualquer material e eu mostro onde jogar."
  },

  // --- Papel ---
  {
    chaves: ["papel", "folha", "revista", "jornal", "caixa", "envelope", "caderno", "cartão", "papelão"],
    resposta: "📄 Coloque papéis e papelão limpos e secos na **lixeira azul**. ➡️ Não recicle papel engordurado, higiênico ou sujo."
  },

  // --- Plástico ---
  {
    chaves: ["plastico", "plástico", "garrafa", "embalagem", "sacola", "pet", "copinho", "canudo", "pote", "tupperware", "brinquedo"],
    resposta: "🧴 Coloque plásticos limpos e secos na **lixeira vermelha**. ➡️ Brinquedos e plásticos duros devem ser levados a **ecopontos**."
  },

  // --- Vidro ---
  {
    chaves: ["vidro", "garrafa de vidro", "copo de vidro", "pote de vidro", "frasco", "vidraria", "ampola"],
    resposta: "🍾 Vidros inteiros ou quebrados devem ir na **lixeira verde**, bem embalados. ➡️ Não recicle espelhos, lâmpadas ou porcelanas."
  },

  // --- Metal ---
  {
    chaves: ["metal", "lata", "alumínio", "ferro", "aço", "panelas", "grampos", "pregos", "latinha"],
    resposta: "🥫 Metais vão na **lixeira amarela**. ➡️ Latinhas podem ser levadas a cooperativas de reciclagem ou ecopontos."
  },

  // --- Orgânico ---
  {
    chaves: ["organico", "orgânico", "resto de comida", "casca", "banana", "fruta", "verdura", "pão", "arroz", "café", "chá", "ovo"],
    resposta: "🍌 Restos de comida vão na **lixeira marrom**. ➡️ Melhor opção: faça **compostagem** em casa para virar adubo."
  },

  // --- Pilhas e baterias ---
  {
    chaves: ["pilha", "bateria", "duracell", "energizer", "carro bateria", "recarregável"],
    resposta: "🔋 Leve pilhas e baterias a **farmácias, supermercados (Carrefour, Extra, Walmart) ou ecopontos**. ➡️ Nunca jogue no lixo comum!"
  },

  // --- Eletrônicos ---
  {
    chaves: ["eletronico", "eletrônico", "celular", "computador", "tv", "fone", "carregador", "notebook", "tablet", "console"],
    resposta: "💻 Leve eletrônicos velhos a **ecopontos, cooperativas ou lojas como Ponto Frio, Casas Bahia e Magazine Luiza**."
  },

  // --- Óleo ---
  {
    chaves: ["oleo", "óleo", "óleo de cozinha", "óleo usado"],
    resposta: "🛢️ Coloque o óleo usado em uma garrafa PET fechada e leve a **supermercados (como Pão de Açúcar, Extra) ou ecopontos**."
  },

  // --- Roupas e tecidos ---
  {
    chaves: ["roupa", "camisa", "calça", "tecido", "meia", "sapato", "toalha", "lençol", "cobertor"],
    resposta: "👕 Doe roupas em bom estado. ➡️ Roupas velhas podem ir para **coleta de têxteis em shoppings, ONGs ou ecopontos**."
  },

  // --- Fraldas e absorventes ---
  {
    chaves: ["fralda", "absorvente", "lenço umedecido", "higiênico", "cueca descartável"],
    resposta: "🚫 Fraldas e absorventes vão para o **lixo comum**, bem embalados. ➡️ Não são recicláveis."
  },

  // --- Materiais hospitalares ---
  {
    chaves: ["seringa", "agulha", "remédio vencido", "medicamento", "curativo", "termômetro"],
    resposta: "⚠️ Leve seringas e remédios vencidos para **farmácias, postos de saúde ou drogarias grandes como Drogasil**."
  },

  // --- Tintas e químicos ---
  {
    chaves: ["tinta", "solvente", "químico", "verniz", "óleo lubrificante", "agrotóxico"],
    resposta: "🎨 Restos de tinta e químicos devem ir para **ecopontos ou programas de logística reversa das marcas**."
  },

  // --- Vidros não recicláveis ---
  {
    chaves: ["espelho", "louça", "porcelana", "cerâmica", "prato", "xícara"],
    resposta: "⚠️ Embale bem espelhos e porcelanas e jogue no **lixo comum**, para evitar acidentes."
  },

  // --- Outros específicos ---
  {
    chaves: ["isopor", "isoporzinho", "bandejinha de isopor"],
    resposta: "📦 O isopor é reciclável em algumas cidades. ➡️ Leve a **ecopontos de plásticos** se houver coleta."
  },
  {
    chaves: ["cigarro", "bituca", "filtro de cigarro"],
    resposta: "🚭 Bitucas de cigarro vão no **lixo comum**. ➡️ Nunca jogue no chão, pois 1 bituca pode contaminar litros de água."
  },
  {
    chaves: ["máscara", "luva", "hospitalar", "equipamento de proteção"],
    resposta: "😷 Máscaras e luvas usadas vão no **lixo comum**, sempre bem fechadas."
  },
  {
    chaves: ["madeira", "pallet", "móvel", "cadeira", "armário"],
    resposta: "🪵 Madeiras e móveis devem ser levados a **ecopontos de volumosos ou programas de doação**."
  },
  {
    chaves: ["cd", "dvd", "disco", "fita cassete", "disquete"],
    resposta: "💿 Leve CDs e DVDs para **ecopontos de eletrônicos ou cooperativas**. ➡️ Algumas universidades também recebem."
  },
  {
    chaves: ["lampada", "lâmpada", "fluorescente", "led"],
    resposta: "💡 Lâmpadas devem ser entregues em **lojas de materiais de construção (Leroy Merlin, Telhanorte) ou ecopontos**."
  },
  {
    chaves: ["colchão", "travesseiro", "sofá"],
    resposta: "🛏️ Colchões e sofás devem ser descartados na **coleta de volumosos da prefeitura** ou ecopontos."
  },
  {
    chaves: ["pneu", "borracha", "pneus"],
    resposta: "🚗 Pneus devem ser entregues em **borracharias, oficinas ou ecopontos parceiros da Reciclanip**."
  },
  {
    chaves: ["cápsula de café", "nespresso", "dolce gusto"],
    resposta: "☕ Cápsulas de café podem ser entregues em **pontos oficiais das marcas (como Nespresso, Dolce Gusto)**."
  },
  {
    chaves: ["escova de dente", "escova"],
    resposta: "🪥 Escovas de dente podem ser levadas a **programas de farmácias (Colgate, Drogasil) ou ecopontos**."
  },

  // --- Novos materiais ---
  {
    chaves: ["pneu de bicicleta", "câmara de ar", "borracha de bike"],
    resposta: "🚴‍♂️ Pneus e câmaras de ar de bicicleta devem ir para **oficinas ou ecopontos especializados em borracha**."
  },
  {
    chaves: ["panela velha", "frigideira", "utensílio de cozinha"],
    resposta: "🍳 Panelas e frigideiras de metal vão para a **lixeira amarela** ou ecopontos de metais."
  },
  {
    chaves: ["espuma", "colchonete", "almofada"],
    resposta: "🛋️ Espumas devem ser levadas a **ecopontos de volumosos**. ➡️ Algumas fábricas reutilizam como enchimento."
  },
  {
    chaves: ["carregador", "cabo", "fio", "fiação elétrica"],
    resposta: "🔌 Leve cabos e carregadores para **ecopontos de eletrônicos** ou programas de logística reversa."
  },
  {
    chaves: ["panelas de pressão", "panela quebrada"],
    resposta: "🍲 Panelas de pressão e grandes utensílios metálicos devem ir para **sucateiros ou ecopontos de metais**."
  },
  {
    chaves: ["pintura", "spray", "aerosol"],
    resposta: "🧴 Latas de spray e aerossóis devem ser entregues em **ecopontos de resíduos perigosos**."
  },
  {
    chaves: ["gesso", "entulho", "cimento"],
    resposta: "🏗️ Restos de obra como gesso, cimento e entulho devem ser levados a **ecopontos de construção civil**."
  },
  {
    chaves: ["papel alumínio", "alumínio"],
    resposta: "🥡 Papel alumínio limpo pode ir para a **lixeira amarela** (metais). ➡️ Se estiver sujo, vai para o lixo comum."
  },{
    chaves: ["filtro de café", "café coado", "pó de café"],
    resposta: "☕ Filtros e pó de café usados vão para a **lixeira marrom** (orgânico). ➡️ Melhor ainda: faça compostagem!"
  } ,{ chaves: ["adesivo", "etiqueta", "cola"], resposta: "📦 Adesivos e etiquetas com cola devem ser jogados no **lixo comum**, pois não são recicláveis."},
  {
    chaves: ["cartucho de tinta", "tinta de impressora", "cartucho"],
    resposta: "🖨️ Cartuchos de tinta devem ser levados a **lojas de informática ou ecopontos de eletrônicos**."
  }, {
    chaves: ["fita adesiva", "scotch", "fitas"],
    resposta: "📦 Fitas adesivas devem ser jogadas no **lixo comum**, pois não são recicláveis."
  }, {
    chaves: ["cera de vela", "vela usada", "resto de vela"], resposta: "🕯️ Cera de vela deve ser jogada no **lixo comum**. ➡️ Evite jogar no ralo para não entupir."
  }, {
    chaves : ["papel", "papel aluminio", "aluminio"], resposta: "🥡 Papel alumínio limpo pode ir para a **lixeira amarela** (metais). ➡️ Se estiver sujo, vai para o lixo comum."
  }
];



// --------- Funções de Inteligência ------------

// Função de similaridade (Levenshtein simplificado)
function getSimilarity(a, b) {
  const matrix = [];
  const alen = a.length;
  const blen = b.length;

  for (let i = 0; i <= alen; i++) matrix[i] = [i];
  for (let j = 0; j <= blen; j++) matrix[0][j] = j;

  for (let i = 1; i <= alen; i++) {
    for (let j = 1; j <= blen; j++) {
      if (a.charAt(i - 1).toLowerCase() === b.charAt(j - 1).toLowerCase()) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substituição
          matrix[i][j - 1] + 1,     // inserção
          matrix[i - 1][j] + 1      // remoção
        );
      }
    }
  }

  return 1 - matrix[alen][blen] / Math.max(alen, blen);
}

// Função para encontrar resposta (com correção inteligente)
function procurarResposta(frase) {
  frase = frase.toLowerCase();
  let melhorResposta = null;
  let maiorSimilaridade = 0;

  for (let item of respostas) {
    for (let chave of item.chaves) {
      const similaridade = getSimilarity(frase, chave);
      if (frase.includes(chave) || similaridade > maiorSimilaridade) {
        if (similaridade > maiorSimilaridade) {
          maiorSimilaridade = similaridade;
          melhorResposta = item.resposta;
        }
      }
    }
  }

  return maiorSimilaridade >= 0.6
    ? melhorResposta
    : " Não sei qual material é esse ainda hein, mas me de mais dicas.";
}

// --------- Funções do Chat ------------

function sendMessage(message) {
  if (!message) return;
  addMessage(message, "user");

  let resposta = procurarResposta(message);

  setTimeout(() => {
    addMessage(resposta, "bot");
  }, 500);
}

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add(sender === "user" ? "user-message" : "bot-message");
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

sendBtn.addEventListener("click", () => {
  sendMessage(userInput.value.trim());
  userInput.value = "";
  userInput.focus();
});

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    sendMessage(userInput.value.trim());
    userInput.value = "";
  }
});

optionBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    sendMessage(btn.textContent);
  });
});

window.onload = () => {
  addMessage("Olá! 🤖 O que vamos reciclar hoje? Digite um material ou escolha um botão! ♻️", "bot");
};
