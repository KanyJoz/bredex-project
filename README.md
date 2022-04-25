# bredex-project
## Leírás
Formula 1-es csapatok egyszerű nyilvántartását megvalósító CRUD full stack alkalmazás.

## Funkciók
- Csapatok listázása
- Új csapat felvétele
- Csapat törlése
- Csapat adatainka frissítése
- Bejelentkezés
- Regisztráció
- Kijelentkezés

## Használt technológiák
- Angular 11+ frontend keretrendszer
- NgRX state menedzser (effects, reducers, actions)
- Bootstrap CSS keretrendszer
- Font-Awesome fontikonok
- Laravel 9 (PHP backend) keretrendszer
- In-memory sqlite adatbázis egyszerű tárolásra

## Telepítés
1) Angular CLI globális telepítése, ha még nem történt meg | Parancs: npm install -g @angular/cli
2) Node.js telepítése, ha még nem történt meg az npm package manager használata érdekében | URL: https://nodejs.org/en/download/
3) Megfelelő PHP verizó feltelepítése (PHP 8+)
4) NPM-hez hasoonló backend függőségeket kezelő Composer package menedzser telepítése, ha még nem történt meg | URL: https://getcomposer.org/download/
5) Kód letöltése erről a repóról
6) formula-one-frontend mappában telepíteni az npm függőségeket | Parancs: npm install
7) formula-one-backend mappában telepíteni a composer függőségeket | Parancs: composer install 
8) env.example fájból készíteni a formila-one-backend mappa gyökerébe egy .env nevű másolatot
9) formula-one-backend mappán belül és a database mappán belül készíteni egy in-memory adatbázis database.sqlite néven (Csak létre kell hozni)
10) .env fájlban beállítani a megfelelő adatbázis paramétereket:

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=

Helyett a következő legyen:

DB_CONNECTION=sqlite
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=<database.sqlite abszolút útvonala a lokális gépen>

11) Adatbázis táblázatok létrehozása migrációval a formula-one-backend mappában a terminálban | Parancs: php artisan migrate
12) Admin felhasználó és teszt formula-1-es csapatok seedeleése az adatbázisba | Parancs: php artisan db:seed
13) Deployolni kell a token alapú authentikációs megoldásért felelős Laravel Passport alkalmazást | Parancs: php artisan passport:install
14) Generálni kell egy alkalmazás kulcsot, ami alapján enkriptálhatja a tokeneket a passport | Parancs: php artisan key:generate
15) forumla-one-backend mappából elindítani a bakcend logikát futtatót dev servert | Parancs: php artisan serve
16) Nyitni egy új terminált, elnavigálni a formula-one-frontedn mappába és ott pedig a frontendet kiszolgáló devszervert elindítani | Parancs: ng serve
17) localhost:4200-as porton elérhető a full stack alklamazás
18) Admin felhasználó adatai: name: admin, email: admin@gmail.com, password: f1test2018 (Bejelentkezéshez utóbbi két adat kell)
