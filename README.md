# Athena Gym

# 🏋️‍♂️ Site Institucional de Academia

Site institucional **one-page (single page)** desenvolvido com **React** e **Tailwind CSS**, com arquitetura preparada para **extensão fullstack**.

O projeto demonstra boas práticas de **engenharia de software**, **organização de frontend**, e **base sólida para integração com backend**, mesmo mantendo o escopo atual como MVP.

---

## 🎯 Objetivo

Construir um **MVP de site institucional** que apresente:

* A academia e sua proposta de valor
* Serviços e modalidades
* Equipe profissional
* Estrutura física
* Depoimentos de alunos
* Informações de contato

Tudo concentrado em uma **única página**, do **Header ao Footer**, com navegação por âncoras.

---

## 🧩 Características do Projeto

* Arquitetura **one-page** (SPA)
* Navegação por **links âncora no Header**
* Layout **responsivo (mobile-first)**
* Componentização clara no frontend
* Estrutura preparada para consumo de APIs
* Separação entre camada de apresentação e lógica
* Escopo controlado (MVP)

🚫 Fora do escopo atual:

* Autenticação / área do aluno
* Pagamentos online
* Dashboards administrativos
* Banco de dados complexo

---

## 🛠️ Tecnologias Utilizadas

### Frontend

* **React**
* **Tailwind CSS (versão mais recente)**
* **JavaScript (ES6+)**

### Backend (preparado para evolução)

* Arquitetura compatível com **APIs REST**
* Integração futura com Node.js / Express ou frameworks equivalentes

### Geral

* **HTML5 & CSS3**
* Estrutura orientada a componentes

---

## 🗂️ Estrutura do Repositório

````text
project/
├── docs/              # Documentação de produto e escopo
│   ├── PRD.md
│   ├── MRP.md
│   └── SCOPE.md
│
├── agent/             # Configurações internas (não obrigatórias para execução)
│   └── system_prompt.md
│
├── src/
│   ├── components/    # Componentes reutilizáveis
│   ├── pages/         # Página principal (Home)
│   ├── services/      # Camada de serviços / integração com APIs
│   └── styles/        # Estilos globais
│
├── public/
├── README.md
└── package.json
```text
project/
├── docs/
│   ├── PRD.md        # Product Requirements Document
│   ├── MRP.md        # Regras para uso de IA
│   └── SCOPE.md      # Controle rigoroso de escopo
│
├── agent/
│   └── system_prompt.md  # Prompt de sistema para agentes de IA
│
├── src/
│   ├── components/  # Componentes React por seção
│   ├── pages/       # Página principal (Home)
│   └── styles/      # Estilos globais
│
├── public/
├── README.md
└── package.json
````

---

## 🚀 Como Executar o Projeto

```bash
# Instalar dependências
npm install

# Executar em ambiente de desenvolvimento
npm run dev
```

---

## 📄 Documentação

* **PRD.md** → Requisitos do produto
* **MRP.md** → Regras para atuação de agentes de IA
* **SCOPE.md** → Delimitação de escopo
* **system_prompt.md** → Prompt de sistema do agente

Esses documentos fazem parte do projeto e garantem consistência e controle.

---
