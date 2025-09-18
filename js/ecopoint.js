// Lista de bairros oficiais do Rio
const bairrosRJ = [
  "Abolição","Acari","Água Santa","Alto da Boa Vista","Anchieta","Andaraí","Anil","Bancários","Bangu","Barra da Tijuca",
  "Barra de Guaratiba","Barros Filho","Benfica","Bento Ribeiro","Bonsucesso","Botafogo","Brás de Pina","Cachambi","Cacuia",
  "Caju","Camorim","Campinho","Campo dos Afonsos","Campo Grande","Cascadura","Catete","Catumbi","Cavalcanti","Centro",
  "Cidade de Deus","Cidade Nova","Cidade Universitária","Cocotá","Coelho Neto","Colégio","Complexo do Alemão","Copacabana",
  "Cordovil","Cosme Velho","Cosmos","Costa Barros","Curicica","Del Castilho","Deodoro","Encantado","Engenheiro Leal",
  "Engenho da Rainha","Engenho de Dentro","Engenho Novo","Estácio","Flamengo","Freguesia","Freguesia de Jacarepaguá",
  "Galeão","Gamboa","Gardênia Azul","Gávea","Gericinó","Glória","Grajaú","Grumari","Guadalupe","Guaratiba","Higienópolis",
  "Honório Gurgel","Humaitá","Inhaúma","Inhoaíba","Ipanema","Irajá","Itanhangá","Jacaré","Jacarepaguá","Jacarezinho",
  "Jardim América","Jardim Botânico","Jardim Carioca","Jardim Guanabara","Jardim Sulacap","Joá","Lagoa","Laranjeiras","Leblon",
  "Leme","Lins de Vasconcelos","Madureira","Magalhães Bastos","Mangueira","Manguinhos","Maracanã","Maré","Marechal Hermes",
  "Maria da Graça","Méier","Moneró","Olaria","Osvaldo Cruz","Paciência","Padre Miguel","Paquetá","Parada de Lucas",
  "Parque Anchieta","Parque Colúmbia","Pavuna","Pechincha","Pedra de Guaratiba","Penha","Penha Circular","Piedade","Pilares",
  "Pitangueiras","Portuguesa","Praça da Bandeira","Praça Seca","Praia da Bandeira","Quintino Bocaiúva","Ramos","Realengo",
  "Recreio dos Bandeirantes","Riachuelo","Ribeira","Ricardo de Albuquerque","Rio Comprido","Rocha","Rocha Miranda","Rocinha",
  "Sampaio","Santa Cruz","Santa Teresa","Santíssimo","Santo Cristo","São Conrado","São Cristóvão","São Francisco Xavier",
  "Saúde","Senador Camará","Senador Vasconcelos","Sepetiba","Tanque","Taquara","Tauá","Tijuca","Todos os Santos","Tomás Coelho",
  "Turiaçú","Urca","Vargem Grande","Vargem Pequena","Vasco da Gama","Vaz Lobo","Vicente de Carvalho","Vidigal","Vigário Geral",
  "Vila da Penha","Vila Isabel","Vila Kosmos","Vila Militar","Vila Valqueire","Vista Alegre","Zumbi"
];
const ecopontos = [
  { bairro:"Abolição", nome:"Aterro da Abolição", lat:-22.810, lng:-43.236 },
  { bairro:"Acari", nome:"Lixão do Acari", lat:-22.856, lng:-43.314 },
  { bairro:"Água Santa", nome:"Central de Reciclagem Água Santa", lat:-22.879, lng:-43.220 },
  { bairro:"Alto da Boa Vista", nome:"Ponto Verde Alto da Boa Vista", lat:-22.914, lng:-43.267 },
  { bairro:"Anchieta", nome:"Aterro Sanitário Anchieta", lat:-22.850, lng:-43.355 },
  { bairro:"Andaraí", nome:"Lixão do Andaraí", lat:-22.925, lng:-43.245 },
  { bairro:"Anil", nome:"Centro de Reciclagem Anil", lat:-22.948, lng:-43.402 },
  { bairro:"Bancários", nome:"Ponto de Coleta Bancários", lat:-22.875, lng:-43.217 },
  { bairro:"Bangu", nome:"Aterro de Bangu", lat:-22.888, lng:-43.467 },
  { bairro:"Barra ", nome:"Lixão da Barra", apelidos:["Barra"], lat:-23.000, lng:-43.365 },
  { bairro:"Barra de Guaratiba", nome:"Aterro de Guaratiba", lat:-23.040, lng:-43.508 },
  { bairro:"Barros Filho", nome:"Ponto Verde Barros Filho", lat:-22.870, lng:-43.350 },
  { bairro:"Benfica", nome:"Central de Reciclagem Benfica", lat:-22.911, lng:-43.189 },
  { bairro:"Bento Ribeiro", nome:"Lixão Bento Ribeiro", lat:-22.888, lng:-43.310 },
  { bairro:"Bonsucesso", nome:"Aterro Bonsucesso", lat:-22.846, lng:-43.271 },
  { bairro:"Botafogo", nome:"Ponto Verde Botafogo", lat:-22.950, lng:-43.182 },
  { bairro:"Brás de Pina", nome:"Centro de Reciclagem Brás de Pina", lat:-22.843, lng:-43.241 },
  { bairro:"Cachambi", nome:"Lixão do Cachambi", lat:-22.900, lng:-43.244 },
  { bairro:"Cacuia", nome:"Ponto Verde Cacuia", lat:-22.825, lng:-43.033 },
  { bairro:"Caju", nome:"Aterro do Caju", lat:-22.888, lng:-43.178 },
  { bairro:"Camorim", nome:"Centro de Reciclagem Camorim", lat:-23.005, lng:-43.403 },
  { bairro:"Campinho", nome:"Ponto Verde Campinho", lat:-22.876, lng:-43.247 },
  { bairro:"Campo dos Afonsos", nome:"Aterro Campo dos Afonsos", lat:-22.880, lng:-43.330 },
  { bairro:"Campo Grande", nome:"Lixão Campo Grande", lat:-22.899, lng:-43.715 },
  { bairro:"Catete", nome:"Aterro Catete", lat:-22.935, lng:-43.180 },
  { bairro:"Catumbi", nome:"Lixão do Catumbi", lat:-22.912, lng:-43.182 },
  { bairro:"Centro", nome:"Central de Reciclagem Centro", lat:-22.906, lng:-43.172 },
  { bairro:"Cidade de Deus", nome:"Lixão Cidade de Deus", lat:-22.898, lng:-43.394 },
  { bairro:"Cidade Nova", nome:"Ponto Verde Cidade Nova", lat:-22.905, lng:-43.177 },
  { bairro:"Cidade Universitária", nome:"Aterro Cidade Universitária", lat:-22.858, lng:-43.233 },
  { bairro:"Cocotá", nome:"Ponto Verde Cocotá", lat:-22.832, lng:-43.033 },
  { bairro:"Coelho Neto", nome:"Lixão Coelho Neto", lat:-22.828, lng:-43.315 },
  { bairro:"Colégio", nome:"Centro de Reciclagem Colégio", lat:-22.838, lng:-43.305 },
  { bairro:"Alemão", nome:"Aterro do Alemão", lat:-22.846, lng:-43.286 },
  { bairro:"Copacabana", nome:"Lixão de Copacabana", apelidos:["Copacabana"], lat:-22.971, lng:-43.182 },
  { bairro:"Cordovil", nome:"Ponto Verde Cordovil", lat:-22.831, lng:-43.287 },
  { bairro:"Cosme Velho", nome:"Central de Reciclagem Cosme Velho", lat:-22.949, lng:-43.186 },
  { bairro:"Cosmos", nome:"Lixão Cosmos", lat:-22.960, lng:-43.443 },
  { bairro:"Costa Barros", nome:"Ponto Verde Costa Barros", lat:-22.828, lng:-43.272 },
  { bairro:"Curicica", nome:"Aterro Curicica", lat:-22.934, lng:-43.398 },
  { bairro:"Del Castilho", nome:"Lixão Del Castilho", lat:-22.871, lng:-43.276 },
  { bairro:"Deodoro", nome:"Ponto Verde Deodoro", lat:-22.851, lng:-43.395 },
  { bairro:"Encantado", nome:"Central de Reciclagem Encantado", lat:-22.871, lng:-43.270 },
  { bairro:"Engenheiro Leal", nome:"Lixão Engenheiro Leal", lat:-22.855, lng:-43.304 },
  { bairro:"Engenho da Rainha", nome:"Aterro Engenho da Rainha", lat:-22.832, lng:-43.296 },
  { bairro:"Engenho de Dentro", nome:"Ponto Verde Engenho de Dentro", lat:-22.897, lng:-43.300 },
  { bairro:"Engenho Novo", nome:"Lixão Engenho Novo", lat:-22.908, lng:-43.244 },
  { bairro:"Estácio", nome:"Central de Reciclagem Estácio", lat:-22.904, lng:-43.188 },
  { bairro:"Flamengo", nome:"Ponto Verde Flamengo", lat:-22.947, lng:-43.176 },
  { bairro:"Freguesia", nome:"Lixão Freguesia", lat:-22.900, lng:-43.325 },
  { bairro:"Freguesia de Jacarepaguá", nome:"Aterro Freguesia Jacarepaguá", lat:-22.980, lng:-43.365 },
  { bairro:"Galeão", nome:"Central de Reciclagem Galeão", lat:-22.808, lng:-43.250 },
  { bairro:"Gamboa", nome:"Ponto Verde Gamboa", lat:-22.903, lng:-43.172 },
  { bairro:"Gardênia Azul", nome:"Lixão Gardênia Azul", lat:-22.881, lng:-43.386 },
  { bairro:"Gávea", nome:"Ponto Verde Gávea", lat:-22.980, lng:-43.237 },
  { bairro:"Gericinó", nome:"Aterro Gericinó", lat:-22.855, lng:-43.420 },
  { bairro:"Glória", nome:"Central de Reciclagem Glória", lat:-22.922, lng:-43.171 },
  { bairro:"Grajaú", nome:"Lixão Grajaú", lat:-22.889, lng:-43.354 },
  { bairro:"Grumari", nome:"Ponto Verde Grumari", lat:-23.020, lng:-43.535 },
  { bairro:"Guadalupe", nome:"Aterro Guadalupe", lat:-22.857, lng:-43.310 },
  { bairro:"Guaratiba", nome:"Central de Reciclagem Guaratiba", lat:-23.070, lng:-43.486 },
  { bairro:"Higienópolis", nome:"Lixão Higienópolis", lat:-22.867, lng:-43.352 },
  { bairro:"Honório Gurgel", nome:"Ponto Verde Honório Gurgel", lat:-22.839, lng:-43.313 },
  { bairro:"Humaitá", nome:"Central de Reciclagem Humaitá", lat:-22.948, lng:-43.182 },
  { bairro:"Inhaúma", nome:"Lixão Inhaúma", lat:-22.845, lng:-43.282 },
  { bairro:"Inhoaíba", nome:"Aterro Inhoaíba", lat:-22.940, lng:-43.500 },
  { bairro:"Ipanema", nome:"Lixão de Ipanema", apelidos:["Ipanema"], lat:-22.983, lng:-43.207 },
  { bairro:"Irajá", nome:"Ponto Verde Irajá", lat:-22.841, lng:-43.265 },
  { bairro:"Itanhangá", nome:"Central de Reciclagem Itanhangá", lat:-22.969, lng:-43.352 },
  { bairro:"Jacaré", nome:"Lixão Jacaré", lat:-22.856, lng:-43.309 },
  { bairro:"Jacarepaguá", nome:"Aterro Jacarepaguá", lat:-22.981, lng:-43.346 },
  { bairro:"Jacarezinho", nome:"Ponto Verde Jacarezinho", lat:-22.857, lng:-43.300 },
  { bairro:"Jardim América", nome:"Lixão Jardim América", lat:-22.931, lng:-43.253 },
  { bairro:"Jardim Botânico", nome:"Central de Reciclagem Jardim Botânico", lat:-22.966, lng:-43.228 },
  { bairro:"Jardim Carioca", nome:"Ponto Verde Jardim Carioca", lat:-22.974, lng:-43.333 },
  { bairro:"Jardim Guanabara", nome:"Aterro Jardim Guanabara", lat:-22.818, lng:-43.033 },
  { bairro:"Jardim Sulacap", nome:"Lixão Jardim Sulacap", lat:-22.880, lng:-43.395 },
  { bairro:"Joá", nome:"Ponto Verde Joá", lat:-23.005, lng:-43.285 },
  { bairro:"Lagoa", nome:"Central de Reciclagem Lagoa", lat:-22.963, lng:-43.188 },
{ bairro:"Laranjeiras", nome:"Ponto Verde Laranjeiras", lat:-22.950, lng:-43.188 },
{ bairro:"Leblon", nome:"Lixão do Leblon", apelidos:["Leblon"], lat:-22.983, lng:-43.222 },
{ bairro:"Leme", nome:"Ponto Verde Leme", lat:-22.977, lng:-43.164 },
{ bairro:"Lins de Vasconcelos", nome:"Aterro Lins de Vasconcelos", lat:-22.888, lng:-43.256 },
{ bairro:"Madureira", nome:"Lixão Madureira", lat:-22.887, lng:-43.293 },
{ bairro:"Magalhães Bastos", nome:"Ponto Verde Magalhães Bastos", lat:-22.884, lng:-43.449 },
{ bairro:"Mangueira", nome:"Central de Reciclagem Mangueira", lat:-22.903, lng:-43.233 },
{ bairro:"Manguinhos", nome:"Lixão Manguinhos", lat:-22.840, lng:-43.241 },
{ bairro:"Maracanã", nome:"Ponto Verde Maracanã", lat:-22.912, lng:-43.230 },
{ bairro:"Maré", nome:"Aterro Maré", lat:-22.873, lng:-43.270 },
{ bairro:"Marechal Hermes", nome:"Lixão Marechal Hermes", lat:-22.857, lng:-43.348 },
{ bairro:"Maria da Graça", nome:"Central de Reciclagem Maria da Graça", lat:-22.909, lng:-43.221 },
{ bairro:"Méier", nome:"Ponto Verde Méier", lat:-22.912, lng:-43.251 },
{ bairro:"Moneró", nome:"Lixão Moneró", lat:-22.808, lng:-43.120 },
{ bairro:"Olaria", nome:"Aterro Olaria", lat:-22.834, lng:-43.257 },
{ bairro:"Osvaldo Cruz", nome:"Central de Reciclagem Osvaldo Cruz", lat:-22.855, lng:-43.277 },
{ bairro:"Paciência", nome:"Lixão Paciência", lat:-22.876, lng:-43.515 },
{ bairro:"Padre Miguel", nome:"Ponto Verde Padre Miguel", lat:-22.890, lng:-43.428 },
{ bairro:"Paquetá", nome:"Central de Reciclagem Paquetá", lat:-22.817, lng:-43.122 },
{ bairro:"Parada de Lucas", nome:"Lixão Parada de Lucas", lat:-22.818, lng:-43.279 },
{ bairro:"Anchieta", nome:"Aterro Parque Anchieta", lat:-22.854, lng:-43.339 },
{ bairro:"Parque Colúmbia", nome:"Ponto Verde Parque Colúmbia", lat:-22.843, lng:-43.297 },
{ bairro:"Pavuna", nome:"Central de Reciclagem Pavuna", lat:-22.809, lng:-43.351 },
{ bairro:"Pechincha", nome:"Lixão Pechincha", lat:-22.882, lng:-43.413 },
{ bairro:"Pedra de Guaratiba", nome:"Aterro Pedra de Guaratiba", lat:-23.050, lng:-43.485 },
{ bairro:"Penha", nome:"Ponto Verde Penha", lat:-22.843, lng:-43.292 },
{ bairro:"Penha ", nome:"Lixão Penha Circular", lat:-22.842, lng:-43.287 },
{ bairro:"Piedade", nome:"Central de Reciclagem Piedade", lat:-22.838, lng:-43.278 },
{ bairro:"Pilares", nome:"Aterro Pilares", lat:-22.842, lng:-43.267 },
{ bairro:"Pitangueiras", nome:"Ponto Verde Pitangueiras", lat:-22.855, lng:-43.290 },
{ bairro:"Portuguesa", nome:"Lixão Portuguesa", lat:-22.843, lng:-43.278 },
{ bairro:"Praça da Bandeira", nome:"Central de Reciclagem Praça da Bandeira", lat:-22.894, lng:-43.199 },
{ bairro:"Praça Seca", nome:"Ponto Verde Praça Seca", lat:-22.883, lng:-43.418 },
{ bairro:"Praia da Bandeira", nome:"Lixão Praia da Bandeira", lat:-22.912, lng:-43.180 },
{ bairro:"Quintino ", nome:"Aterro Quintino Bocaiúva", lat:-22.864, lng:-43.301 },
{ bairro:"Ramos", nome:"Central de Reciclagem Ramos", lat:-22.829, lng:-43.258 },
{ bairro:"Realengo", nome:"Lixão Realengo", lat:-22.865, lng:-43.413 },
{ bairro:"Recreio", nome:"Ponto Verde Recreio", lat:-23.004, lng:-43.418 },
{ bairro:"Riachuelo", nome:"Central de Reciclagem Riachuelo", lat:-22.876, lng:-43.226 },
{ bairro:"Ribeira", nome:"Lixão Ribeira", lat:-22.948, lng:-43.164 },
{ bairro:"Ricardo de Albuquerque", nome:"Ponto Verde Ricardo de Albuquerque", lat:-22.857, lng:-43.338 },
{ bairro:"Rio Comprido", nome:"Central de Reciclagem Rio Comprido", lat:-22.913, lng:-43.192 },
{ bairro:"Rocha", nome:"Lixão Rocha", lat:-22.843, lng:-43.260 },
{ bairro:"Rocha Miranda", nome:"Ponto Verde Rocha Miranda", lat:-22.849, lng:-43.335 },
{ bairro:"Rocinha", nome:"Aterro Rocinha", lat:-22.948, lng:-43.221 },
{ bairro:"Sampaio", nome:"Central de Reciclagem Sampaio", lat:-22.874, lng:-43.225 },
{ bairro:"Santa Cruz", nome:"Lixão Santa Cruz", lat:-22.893, lng:-43.709 },
{ bairro:"Santa Teresa", nome:"Ponto Verde Santa Teresa", lat:-22.925, lng:-43.190 },
{ bairro:"Santíssimo", nome:"Central de Reciclagem Santíssimo", lat:-22.921, lng:-43.550 },
{ bairro:"Santo Cristo", nome:"Lixão Santo Cristo", lat:-22.897, lng:-43.180 },
{ bairro:"São Conrado", nome:"Ponto Verde São Conrado", lat:-22.985, lng:-43.225 },
{ bairro:"São Cristóvão", nome:"Central de Reciclagem São Cristóvão", lat:-22.910, lng:-43.202 },
{ bairro:"São Francisco Xavier", nome:"Lixão São Francisco Xavier", lat:-22.891, lng:-43.251 },
{ bairro:"Saúde", nome:"Ponto Verde Saúde", lat:-22.905, lng:-43.177 },
{ bairro:"Senador Camará", nome:"Central de Reciclagem Senador Camará", lat:-22.882, lng:-43.461 },
{ bairro:"Senador Vasconcelos", nome:"Lixão Senador Vasconcelos", lat:-22.870, lng:-43.400 },
{ bairro:"Sepetiba", nome:"Aterro Sepetiba", lat:-23.020, lng:-43.615 },
{ bairro:"Tanque", nome:"Ponto Verde Tanque", lat:-22.882, lng:-43.448 },
{ bairro:"Taquara", nome:"Central de Reciclagem Taquara", lat:-22.899, lng:-43.395 },
{ bairro:"Tauá", nome:"Lixão Tauá", lat:-22.819, lng:-43.253 },
{ bairro:"Tijuca", nome:"Ponto Verde Tijuca", lat:-22.934, lng:-43.234 },
{ bairro:"Todos os Santos", nome:"Central de Reciclagem Todos os Santos", lat:-22.844, lng:-43.281 },
{ bairro:"Tomás Coelho", nome:"Lixão Tomás Coelho", lat:-22.844, lng:-43.290 },
{ bairro:"Turiaçú", nome:"Aterro Turiaçú", lat:-22.835, lng:-43.330 },
{ bairro:"Urca", nome:"Ponto Verde Urca", lat:-22.949, lng:-43.164 },
{ bairro:"Vargem Grande", nome:"Central de Reciclagem Vargem Grande", lat:-22.975, lng:-43.415 },
{ bairro:"Vargem Pequena", nome:"Lixão Vargem Pequena", lat:-22.985, lng:-43.425 },
{ bairro:"Vasco da Gama", nome:"Ponto Verde Vasco da Gama", lat:-22.853, lng:-43.207 },
{ bairro:"Vaz Lobo", nome:"Central de Reciclagem Vaz Lobo", lat:-22.837, lng:-43.295 },
{ bairro:"Vicente de Carvalho", nome:"Lixão Vicente de Carvalho", lat:-22.850, lng:-43.330 },
{ bairro:"Vidigal", nome:"Aterro Vidigal", lat:-22.994, lng:-43.219 },
{ bairro:"Vigário Geral", nome:"Ponto Verde Vigário Geral", lat:-22.847, lng:-43.290 },
{ bairro:"Vila da Penha", nome:"Central de Reciclagem Vila da Penha", lat:-22.834, lng:-43.263 },
{ bairro:"Vila Isabel", nome:"Lixão Vila Isabel", lat:-22.911, lng:-43.240 },
{ bairro:"Vila Kosmos", nome:"Ponto Verde Vila Kosmos", lat:-22.841, lng:-43.264 },
{ bairro:"Vila Militar", nome:"Central de Reciclagem Vila Militar", lat:-22.897, lng:-43.460 },
{ bairro:"Vila Valqueire", nome:"Lixão Vila Valqueire", lat:-22.889, lng:-43.346 },
{ bairro:"Vista Alegre", nome:"Ponto Verde Vista Alegre", lat:-22.875, lng:-43.330 },
{ bairro:"Zumbi", nome:"Central de Reciclagem Zumbi", lat:-22.849, lng:-43.342 },

   // :contentReference[oaicite:0]{index=0}
  { bairro:"Cascadura",  nome: "lixão do gg" ,lat: -22.88528, lng: -43.32833 },                  // :contentReference[oaicite:1]{index=1}
  { bairro:"Tomás Coelho", nome: "colurmb pet" , lat: -22.8677, lng: -43.30609 },                // :contentReference[oaicite:2]{index=2}
  { bairro:"Madureira", nome: "lota da gruta" , lat: -22.8725, lng: -43.3364 },                    // :contentReference[oaicite:3]{index=3}
  { bairro:"Cavalcanti",  nome: "point rec" ,lat: -22.87111, lng: -43.31667 }                   // :contentReference[oaicite:4]{index=4}




    
];
// Inicializa mapa
const map = L.map('map').setView([-22.9068, -43.1729], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

let markerPonto = null;

// Normaliza string
function normalizar(str){
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim();
}

// Lista de ruas fictícias
const ruasFicticias = [
  "Rua das Flores, 123", "Av. das Palmeiras, 456", "Travessa do Sol, 78", "Rua do Limoeiro, 101",
  "Alameda dos Jacarandás, 234", "Rua do Bosque, 12", "Rua do Mar, 99", "Av. do Horizonte, 250",
  "Rua do Pinheiro, 88", "Travessa da Lua, 17", "Rua das Oliveiras, 64", "Rua do Vento, 45",
  "Alameda das Rosas, 78", "Rua das Margaridas, 90", "Rua do Cedro, 23", "Rua do Horizonte, 66",
  "Travessa do Sol Nascente, 11", "Av. das Gaivotas, 300", "Rua das Orquídeas, 77", "Rua da Esperança, 55",
  "Rua da Liberdade, 101", "Rua da Alegria, 202", "Rua do Horizonte Azul, 37", "Alameda dos Pássaros, 44",
  "Rua do Sol, 88", "Rua da Lua, 99", "Travessa das Estrelas, 66", "Rua do Amanhecer, 120",
  "Rua do Luar, 7", "Rua da Serra, 89", "Av. das Montanhas, 234", "Rua do Rio, 56",
  "Rua das Gaivotas, 90", "Rua do Bosque Verde, 101", "Travessa do Mar, 12", "Rua do Horizonte, 88",
  "Rua da Paz, 33", "Rua das Águas, 77", "Rua do Carvalho, 101", "Alameda das Palmeiras, 56",
  "Rua do Jacarandá, 234", "Rua do Sol Poente, 18", "Travessa da Harmonia, 99", "Rua da Vitória, 45",
  "Rua do Limoeiro, 66", "Rua das Acácias, 120", "Rua da Floresta, 78", "Rua do Cedro Amarelo, 23",
  "Av. do Encanto, 88", "Rua das Magnólias, 150", "Rua do Girassol, 77", "Rua das Violetas, 9"
];

function getRuaAleatoria() {
  return ruasFicticias[Math.floor(Math.random() * ruasFicticias.length)];
}

// Botão encontrar ecoponto
document.getElementById('btnEncontrar').addEventListener('click', () => {
  const bairroInput = document.getElementById('bairroInput').value;
  const bairroNormalizado = normalizar(bairroInput);

  const bairrosNormalizados = bairrosRJ.map(b => normalizar(b));

  if(!bairrosNormalizados.includes(bairroNormalizado)){
    document.getElementById('info').innerText = "Bairro não reconhecido!";
    return;
  }

  // Procura ecoponto do mesmo bairro
  const pontoProximo = ecopontos.find(p => normalizar(p.bairro) === bairroNormalizado);

  const rua = getRuaAleatoria(); // Rua fictícia aleatória
  document.getElementById('info').innerText = `O ecoponto do bairro ${bairroInput} é: ${pontoProximo.nome}, endereço : ${rua}`;

  // Remove marcador antigo
  if(markerPonto) map.removeLayer(markerPonto);

  // Adiciona marcador no mapa
  markerPonto = L.marker([pontoProximo.lat, pontoProximo.lng]).addTo(map)
    .bindPopup(`<b>${pontoProximo.nome}</b><br>Bairro: ${pontoProximo.bairro}<br>Endereço: ${rua}`).openPopup();

  // Centraliza mapa no ecoponto
  map.setView([pontoProximo.lat, pontoProximo.lng], 14);
});

