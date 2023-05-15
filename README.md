# Loja virtual Geek 🎮
O projeto Geek é uma loja virtual de games que foi desenvolvido com o objetivo de oferecer uma experiência incrível e segura para os clientes. O repositório que você está visualizando contém apenas os arquivos do back-end do projeto, 
que é responsável por gerenciar as informações dos produtos, usuários, pedidos e outras funcionalidades.

O projeto conta com rotas públicas e privadas, sendo que as rotas públicas permitem que qualquer usuário possa visualizar informações dos produtos, como nome, descrição e preço. Já as rotas privadas só estão acessíveis para os administradores do sistema,
que possuem permissão para publicar novos produtos, editar ou deletar produtos existentes, além de gerenciar informações dos usuários e pedidos.

Para garantir a segurança das informações do sistema, o projeto utiliza criptografia com JWT (JSON Web Token), que é uma tecnologia de autenticação e autorização de acesso que garante a integridade e confidencialidade dos dados. Isso significa que apenas usuários
com credenciais válidas podem acessar as rotas privadas do sistema.

# Como projeto foi desenvolvido ? 
 O projeto foi desenvolvido utilizando o Node.js, uma plataforma de desenvolvimento de aplicações em Javascript que permite a criação de aplicações web do lado do servidor. Além disso, o projeto utiliza o Typescript, uma linguagem que adiciona recursos de tipagem estática ao 
Javascript, aumentando a segurança e a legibilidade do código.

O Express é um framework para Node.js que fornece uma série de recursos para a criação de aplicações web, como roteamento de URLs, gerenciamento de sessões e criação de APIs. O JWT (JSON Web Token) é uma tecnologia de autenticação e autorização de acesso que garante a integridade e
confidencialidade dos dados, e foi utilizado no projeto para gerenciar a autenticação dos usuários.

O Prisma é uma ferramenta de ORM (Object-Relational Mapping) que permite a comunicação com o banco de dados de forma mais intuitiva e eficiente. Já o MongoDB é um banco de dados NoSQL, que oferece alta escalabilidade, desempenho e flexibilidade para armazenar dados.

<h3>Para instalar o projeto em sua máquina, você precisará seguir os seguintes passos: </h3>

> 1 Certifique-se de ter o Node.js instalado em sua máquina. Caso não tenha, você pode baixá-lo em https://nodejs.org/.

> 2 Instale o MongoDB em sua máquina. Você pode baixar o MongoDB Community Server em https://www.mongodb.com/try/download/community.

> 3 Clone o repositório do projeto em sua máquina.

``
git clone https://github.com/Henrique-Moreno/Geek.git
``

> 4 Abra um terminal na pasta raiz do projeto e execute o comando ``npm install `` ou ``yarn install`` para instalar as dependências do projeto.

> 5 Crie um arquivo ``.env`` na raiz do projeto e configure as variáveis de ambiente necessárias.

> 6 Execute o comando npm run dev para iniciar o servidor em modo de desenvolvimento.

Pronto! O projeto deve estar rodando em sua máquina. Caso tenha alguma dúvida ou precise de ajuda, não hesite em entrar em contato conosco.




