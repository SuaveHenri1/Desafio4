# Conversor de Moedas

Este é um projeto desenvolvido com Angular para criar uma aplicação de conversão de moedas. Ele foi criado como parte de um desafio e possui diversas funcionalidades, incluindo listagem de moedas, conversão, e exibição de histórico. Este README descreve os principais problemas enfrentados durante o desenvolvimento do projeto e as soluções aplicadas.

---

## Problemas Enfrentados

### **1. Configuração do Navbar**
**Problema:** O componente Navbar não aparecia na aplicação.
- **Causa:** O `NavbarComponent` foi registrado no `AppComponent`, mas o seletor `<app-navbar>` não foi incluído no template.
- **Solução:** Adicionei o seletor `<app-navbar>` no `app.component.html` junto com `<router-outlet>` para garantir que o Navbar fosse exibido em todas as páginas.

### **2. Navegação entre Páginas**
**Problema:** Os links do Navbar não funcionavam corretamente.
- **Causa:** O módulo `RouterModule` não havia sido importado no `NavbarComponent`.
- **Solução:** Importei o `RouterModule` no `NavbarComponent` para habilitar o uso das diretivas `routerLink` e `routerLinkActive`. Porém não foi eficaz e a resposividade não funcionou da maneira esperada.

### **3. Página de Listar Moedas Aparecendo em Branco**
**Problema:** A página de listagem de moedas não exibia nenhum conteúdo.
- **Causa:** O `ListarMoedasComponent` não estava configurado corretamente como standalone e/ou o template estava vazio.
- **Solução:** Verifiquei que o componente estava standalone e adicionamos conteúdo no arquivo `listar-moedas.component.html` para garantir que algo fosse exibido. Mas mesmo assim continuou não aparecendo.

### **4. Problemas com PrimeNG**
**Problema:** A biblioteca PrimeNG apresentou dificuldades para configurar temas e estilos.
- **Causa:** Não conseguia utitilizar o primeNG, quando tentava utilizar algum tema dele, ele apresentava erro alegando não ter encontrado tal tema.
- **Solução:** Decidi não usar o PrimeNG no projeto e, em vez disso, utilizei tabelas HTML padrão e estilos do Bootstrap para resolver o problema.

### **5. Responsividade da Aplicação**
**Problema:** Garantir que a aplicação fosse responsiva em diferentes tamanhos de tela.
- **Solução:** Instalei o Bootstrap para gerenciar a responsividade e aplicamos a classe `table-responsive` às tabelas, garantindo que fossem exibidas corretamente em dispositivos móveis.

---
## Conclusão

Mesmo não tendo conseguido verificar se a API estava integrada corretamente ao código e funcionando como esperado, além de enfrentar dificuldades com certos aspectos do Angular e não concluir o projeto exatamente como solicitado, aprendi muito sobre desenvolvimento com Angular, uma tecnologia com a qual nunca tinha trabalhado antes. Apesar de não ter concluído no prazo, planejo finalizar este projeto o quanto antes, a fim de adquirir mais experiência e aprofundar meu aprendizado.
