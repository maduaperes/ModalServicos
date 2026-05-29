# ModalServicos

## Visão Geral
O **ModalServicos** é uma aplicação web desenvolvida com tecnologias front-end nativas (HTML5, CSS3 e JavaScript) projetada com foco didático. O objetivo principal do projeto é demonstrar a implementação, o comportamento e a estilização de um componente de interface do tipo **modal** (janela sobreposta), explorando eventos e manipulação dinâmica da árvore do DOM.

---

## Funcionalidades Principais
* **Abertura Dinâmica:** Inicialização e exibição do componente modal por meio de eventos de clique em gatilhos específicos.
* **Fechamento Flexível:** Mecanismo de ocultação do modal acionado tanto pelo botão interno de encerramento quanto por cliques na área externa (overlay).
* **Controle de Estado Nativo:** Gerenciamento de visibilidade realizado via JavaScript puro (Vanilla JS), sem dependência de bibliotecas externas.
* **Camada de Sobreposição (Overlay):** Bloqueio visual do plano de fundo para focar a atenção do usuário no conteúdo do componente.

---

## Tecnologias e Conceitos Utilizados
* **Estruturação:** HTML5
* **Estilização:** CSS3 (Posicionamento absoluto/fixo, z-index e centralização)
* **Comportamento:** JavaScript Nativo (Vanilla JS)
* **Conceitos de UI/UX:** Manipulação do DOM, escuta de eventos (Event Listeners) e gerenciamento de classes CSS.

---

## Estrutura do Projeto
Organização dos arquivos essenciais do repositório:

```text
ModalServicos/
├── index.html       # Estrutura de marcação do documento e do container do modal
├── style.css        # Regras de layout, centralização do modal e efeito de overlay
└── app.js           # Lógica de controle, captura de cliques e alternância de classes

```

> **Nota:** Arquivos auxiliares e diretórios de cache local foram incluídos no fluxo do .gitignore para manter o código limpo e focado no escopo do componente.

---

## Detalhes de Implementação

### Estrutura (HTML)

O arquivo `index.html` define o ponto de entrada da aplicação, contendo o botão de gatilho principal e a estrutura semântica do modal encapsulada, garantindo acessibilidade e fluxo correto de renderização.

### Estilização (CSS)

O arquivo `style.css` lida com o isolamento visual do modal utilizando propriedades de profundidade (`z-index`) e esmaecimento de fundo, além de prover transições suaves para a exibição do conteúdo.

### Comportamento (JavaScript)

O arquivo `app.js` monitora as interações do usuário. Ele adiciona e remove classes utilitárias do CSS para alternar os estados de visibilidade do modal com base nos eventos detectados na interface.

---

## Como Executar o Projeto

1. **Clonar o repositório:**
```bash
git clone [https://github.com/maduaperes/ModalServicos.git](https://github.com/maduaperes/ModalServicos.git)

```


2. **Navegar até a pasta:**
```bash
cd ModalServicos

```


3. **Executar a aplicação:**
Abra o arquivo `index.html` diretamente em qualquer navegador web ou utilize a extensão Live Server para execução local.

---

## Objetivo Educacional

Este repositório serve como material prático de portfólio para consolidar o aprendizado em:

* Fluxo de renderização e posicionamento de elementos em CSS.
* Captura de eventos e delegação em JavaScript.
* Criação de componentes de interface de usuário reutilizáveis e modulares.
