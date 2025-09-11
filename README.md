# Angular Test — Users App

Проект на **Angular** (директория `users-app`). Репозиторий создан для практики: сборки, запуска, тестирования приложения, а также работы с Docker.  

---

## 🔍 Что видно в репозитории

- Основная папка проекта — `users-app`. :
- `package-lock.json` в корне. :
- Языки/технологии, используемые в проекте: **TypeScript**, **HTML**, **CSS**, а также **Dockerfile** . 

---

## ⚙️ Требования

- Node.js (рекомендуется LTS, версия около 20.x)  
- npm  
- Angular CLI (`@angular/cli`) — можно глобально или использовать `npx`  
- Docker   

---

## 🚀 Быстрый старт

```bash
# Клонировать репозиторий
git clone https://github.com/kuistal/Angular-test.git

# Перейти в папку проекта
cd Angular-test/users-app

# Установить зависимости
npm install

# Запустить дев-сервер
# Если в package.json настроен скрипт "start"
npm start

# Или через Angular CLI напрямую
npx ng serve --open
```
---
# Сборка для разработки
npx ng build

# Сборка для продакшена
npx ng build --configuration production

# из корня репозитория (или подкорректировать путь к Dockerfile)
docker build -t angular-users-app .

# запустить контейнер, смонтировать порт
docker run --rm -p 4200:4200 angular-users-app
---

Структура проекта
```
Angular-test/
├─ users-app/
│  ├─ src/
│  │  ├─ app/
│  │  │  ├─ core/
│  │  │  ├─ shared/
│  │  │  ├─ features/
│  │  │  ├─ app.component.* 
│  │  │  └─ app.module.ts
│  │  ├─ assets/
│  │  ├─ environments/
│  │  └─ styles.*
│  ├─ angular.json
│  ├─ package.json
│  └─ tsconfig*.json
├─ package-lock.json
├─ Dockerfile?          # если находится в корне или внутри users-app
└─ README.md            # ты его сейчас создаёшь
```
