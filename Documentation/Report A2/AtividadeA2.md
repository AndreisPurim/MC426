
# Avaliação A2
**MC426** Report on 30/04/2023

**ATENÇÃO:** APENAS CONSIDERAR AS BRANCHES APÓS O DIA 14/04 (Antes estava bagunçado)
[Features](#Features)
[Testes e CI/CD](#CI/CD)
[Gitflow](https://github.com/AndreisPurim/MC426/network)

## Proposta e Funcionalidades:
O nosso sistema visa implementar uma plataforma de formatação de prontuários médicos interoperáveis, mas não sabemos exatamente quais outras features podem ser necessárias devido à natureza da área médica (apenas descobriremos conforme formos capazes de validar com possíveis usuários). Além disso, o núcleo base do produto já foi descrito no artigo do [ICIPEMIR](https://pubmed.ncbi.nlm.nih.gov/34042778/), basta traduzi-lo para os requisitos básicos de software, e todas as outras etapas serão de melhorias em cima desse núcleo

Como somos 4 pessoas no grupo, escolhemos 2 funcionalidades para estarem completas (fullstack):

### Features:

- **Login:**
	- Link da [Issue #17](https://github.com/AndreisPurim/MC426/issues/28) e [Pull Request #28](https://github.com/AndreisPurim/MC426/pull/27)
	-  Componente no [Frontend](https://github.com/AndreisPurim/MC426/blob/main/Frontend/src/Pages/Login/LoginCard.tsx)
- **Signup:**
	- Link da [Issue #27](https://github.com/AndreisPurim/MC426/issues/27) e [Pull Request #30](https://github.com/AndreisPurim/MC426/pull/32)
	-  Componente no [Frontend](https://github.com/AndreisPurim/MC426/blob/main/Frontend/src/Pages/Login/SignupCard.tsx)

Temos algumas outras funcionalidades semi-prontas, como por exemplo o a página do profile com a tabela de prontuários e o leitor de QR Code, ambas funcionando no frontend e podem ser usadas após login no sistema.

O diagrama abaixo explica o funcionamento do site do ponto de vista do Frontend
```mermaid
classDiagram
index <|-- Components
index <|-- Pages
index <|-- Sources
index <|-- Tests
Pages <|-- Landing
Pages <|-- Login
Pages <|-- Profile
Login <|-- LoginCard
Login <|-- SignupCard
Profile <|-- ReadQRCode
Profile <|-- UserCard
Profile <|-- UserTable
class ReadQRCode{
Le_codigos_QR_de_prontuarios
(Frontend_acabado)
}
class UserCard{
Perfil_do_usuario
(Frontend_acabado)
}
class UserTable{
Tabela_de_prontuarios_medicos
(Frontend_acabado)
}
class LoginCard{
Feature_de_Login
(Feature_1)
}
class SignupCard{
Feature_de_Signup
(Feature_2)
}
class Landing{
Página_inicial
}
class Login{
Pagina_de_Login
(Avaliação_A2)
}
class Profile{
Pagina_do_usuário
}
class index{
Controla_todas_as_variaveis
}
class Components{
Componentes_reutilizaveis
(...)
}
class  Pages{
Paginas_acessiveis
}
class  Sources{
Outras_funcionalidades
(...)
}
class  Tests{
Pasta_com_testes
(Vários_testes...)
}
```
Enquanto isso, o backend funciona como uma simples API, recebendo requests de GET e POST no ```/user```

## Como rodar localmente e ver as funcionalidades:
 
Para rodar o backend, é necessário abrir a pasta ```/Backend```, instalar ```pip install -r requirements.txt``` e depois rodar o servidor com ```uvicorn main:app```. O terminal deve mostrar a API rodando na porta ```:8000```. Por padrão a biblioteca Swagger disponibiliza uma página de testes da API em http://localhost:8000/docs
 
O frontend já possui um deploy automático na branch ```gh-deploy``` que utiliza o Github Pages e permite acessar pelo link http://andreis.lv/MC426/ (igualmente válido: https://AndreisPurim.github.io/MC426). Portanto, não é necessário executar nada.

Se for necessário, basta estar na pasta ```/Frontend```, executar ```yarn install``` e ```yarn run start```, e ```yarn test``` para executar os testes manualmente.

No frontend, você deve ser capaz de ver a página de Landing, e clicando nos botões de login deve ser capaz de ir para a página de login/signup.

Você pode fazer o signup com qualquer usuário e email e senha, desde que ambas as senhas coincidam (não estamos verificando ainda, por exemplo, usuário ou email já utilizados). Caso sucesso, um alerta verde no canto esquerdo inferior indicará o ID registrado no banco de dados, caso apareça um erro, significa que o backend não foi executado corretamente.

E ai você pode testar o login diretamente, há três possibilidades:

- AxiosError: Backend não está sendo executado corretamente
- User not found: Usuário não está no banco de dados
- Wrong password: Usuário existe mas a senha está errada
- Success: Você será redirecionado para o mock da página de perfil do usuário "Andreis".
 
## Testes e CI/CD

![CI/CD](https://github.com/AndreisPurim/MC426/workflows/CI/CD/badge.svg) [![codecov](https://codecov.io/gh/AndreisPurim/MC426/branch/main/graph/badge.svg)](https://codecov.io/gh/AndreisPurim/MC426/branch/main)

Os testes estão sendo feitos usando JEST (Frontend) e Pytest (Backend) integrados com uma pipeline de teste e deploy automático (no caso do frontend, uma vez que para o backend precisaremos de um servidor no AWS). 

- Github action CI/CD [Frontend](https://github.com/AndreisPurim/MC426/blob/main/.github/workflows/cicd.yml) 
	- [Runs executadas](https://github.com/AndreisPurim/MC426/actions/workflows/cicd.yml) com esse CI/CD
- Github action CI/CD [Backend](https://github.com/AndreisPurim/MC426/blob/main/.github/workflows/backend_cicd.yml)
	- [Runs executadas](https://github.com/AndreisPurim/MC426/actions/workflows/backend_cicd.yml) com esse CI/CD

O relatório de testes está disponível em cada run, e também disponível no site do Codecov ([Link](https://app.codecov.io/gh/AndreisPurim/MC426)).

## Reflexão e Proximos Passos

- As primeiras issues não eram muito descritivas sobre o que era uma história/feature e o que eram tasks, o que deixou grande parte das branches e issues confusas. O Gitflow está ok mas não está ideal ainda. Algo ideal seria do tipo:

![](https://kroki.io/mermaid/svg/eNqVUEEOgDAIu_uKxc_4Dpy4LTpnGPP9Gj0IusTIiZSWUlzgjmD1jTnKphgDP9ueYLHeDLjhnNZr6tFOqbAGT4lpIQ-tFI4IXAi1UIEvL4Y8af6NiBs_lv0XRySHFXcZ8-JUQ0UIi-C8nyPaHdssdL0)

- Nós usamos [Milestones](https://github.com/AndreisPurim/MC426/milestones) e [Projects](https://github.com/users/AndreisPurim/projects/1), apesar de que não com muito sucesso
- Por enquanto, há muito _spaghetti_ em ambos o frontend e backend que precisam ser resolvidos sem falta.
- Ambos o backend e frontend precisam ser integrados de uma forma só, possivelmente com algum servidor no AWS.
- Passos para melhorar a documentação foram feitos mas a elicitação de requisitos para entender melhor o escopo do projeto está faltando.





