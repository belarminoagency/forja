# Forja — acesso liberado por você

Quem baixa o app cria uma conta (nome, WhatsApp, e-mail e senha) e cai na tela **"Aguardando liberação"**.
Você abre o app com o seu e-mail de admin, vai em **Perfil → Clientes** e toca em **Liberar**. O app do cliente abre sozinho na hora.
Se alguém parar de pagar, toque em **Tirar acesso** (dentro de "Com acesso"): o app fecha para essa pessoa na hora.

Sem o passo 1, o app abre em **modo demonstração** (contas só no aparelho, para testar).

---

## 1. Ligar o Firebase (grátis, uns 5 minutos)
1. Acesse console.firebase.google.com → **Adicionar projeto** → nome `forja` (pode desativar o Analytics).
2. **Authentication** → Começar → ative **E-mail/senha**.
3. Authentication → Configurações → **Domínios autorizados** → adicione `belarminoagency.github.io`.
4. **Firestore Database** → Criar banco → modo produção → região `southamerica-east1` (São Paulo).
5. Firestore → aba **Regras** → apague tudo, cole o conteúdo de `firestore.rules` → **Publicar**.
6. Configurações do projeto (engrenagem) → **Seus apps** → ícone `</>` (Web) → registre → copie o bloco `firebaseConfig`.
7. Cole esses valores no arquivo `config.js` (no lugar de `COLE_AQUI` e dos campos vazios).
8. Opcional: em `config.js`, coloque seu WhatsApp em `WHATSAPP` (ex.: `'5511999999999'`). Aparece um botão "Falar com o Kaique" para quem está esperando liberação.
9. Envie os arquivos para o GitHub.

## 2. Crie a sua conta primeiro
Abra o app → **Criar conta** com `agencia.mkt.belarmino@gmail.com`. Esse e-mail entra direto, sem aprovação, e é o único que vê o painel **Clientes**.
Faça isso logo depois de ligar o Firebase, antes de divulgar o link.

Para ter outro admin: adicione o e-mail em `ADMIN_EMAILS` (config.js) **e** na lista de `firestore.rules` (e publique as regras de novo).

## 3. Vendendo
- Mande o link do app para o cliente depois do pagamento (ou antes, tanto faz: ele só entra quando você liberar).
- No painel aparecem nome, e-mail, WhatsApp (toque para abrir a conversa) e a data do cadastro.
- "Recusar" e "Tirar acesso" não apagam a conta: dá para liberar de novo depois em "Sem acesso".

## Observações
- O plano, os treinos marcados e o peso de cada cliente ficam salvos no aparelho dele, separados por conta.
- O cliente esqueceu a senha? Na tela de login tem "Esqueci a senha" (chega um e-mail do Firebase).
