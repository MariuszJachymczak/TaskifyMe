Projekt: Prosty system zarządzania zadaniami
Technologie: React, Node.js, MongoDB

Opis:

Aplikacja webowa do zarządzania zadaniami, składająca się z dwóch części: frontendu napisanego w React oraz backendu napisanego w Node.js z wykorzystaniem bazy danych MongoDB.
Aplikacja umożliwia użytkownikowi dodawanie, usuwanie i edytowanie zadań.
Lista zadań wyświetlana jest w formie tabeli, a użytkownik może filtrować i sortować zadania według różnych kryteriów.
Dane o zadaniach są przechowywane w bazie danych MongoDB.
funkcjonalności:

1. Dodawanie nowego zadania
2. Usuwanie istniejącego zadania
3. Edytowanie istniejącego zadania
4. Sortowanie zadań według różnych kryteriów, takich jak data dodania, termin wykonania, priorytet
5. Filtrowanie zadań według różnych kryteriów, takich jak termin wykonania, priorytet
6. Wyświetlanie szczegółowych informacji o zadaniu po kliknięciu na jego nazwę




Wymagania techniczne:

React
Node.js
MongoDB
Zasoby:

Dokumentacja React: https://reactjs.org/docs/getting-started.html
Dokumentacja Node.js: https://nodejs.org/en/docs/
Dokumentacja MongoDB: https://docs.mongodb.com/


Interfejs użytkownika:

1. Strona główna
- Logo i nazwa aplikacji
- Główny panel z przyciskiem dodawania nowego zadania oraz listą zadań
- Każde zadanie w liście ma tytuł, opis, datę dodania, datę wykonania oraz przyciski do edycji i usuwania zadania

2. Formularz dodawania zadania
- Pole tekstowe na tytuł zadania
- Pole tekstowe na opis zadania
- Pole wyboru daty dodania zadania
- Pole wyboru daty wykonania zadania
- Pole wyboru priorytetu zadania
- Przycisk "Dodaj zadanie"
3. Formularz edycji zadania
- Pole tekstowe na tytuł zadania
- Pole tekstowe na opis zadania
- Pole wyboru daty wykonania zadania
- Pole wyboru priorytetu zadania
- Przycisk "Zapisz zmiany"
4. Filtry i sortowanie
- Pole wyboru sortowania zadań według daty dodania, daty wykonania lub priorytetu
- Pole wyboru kierunku sortowania (rosnąco lub malejąco)
- Pole wyboru filtra według priorytetu zadania
- Pole wyboru filtra według terminu wykonania zadania
5. Widok szczegółów zadania
- Tytuł zadania
- Opis zadania
- Data dodania zadania
- Data wykonania zadania
- Priorytet zadania
- Przycisk "Edytuj zadanie"
- Przycisk "Usuń zadanie"

Struktura Plików i folderów:

![taskify_me_files_structure](https://user-images.githubusercontent.com/47177048/229112181-7771f273-e348-41e5-a0c5-cf81a30c5c7d.png)


Opis struktury plików:

- backend/: folder zawierający kod backendu napisanego w Node.js z wykorzystaniem biblioteki Express.js oraz bazy danych MongoDB z wykorzystaniem biblioteki Mongoose.
- controllers/: folder zawierający pliki kontrolerów obsługujących żądania HTTP, np. dodawanie, usuwanie i edycja zadań.
- models/: folder zawierający pliki modeli danych dla bazy MongoDB, np. model dla zadania.
- routes/: folder zawierający pliki routingu obsługujące ścieżki HTTP, np. /api/tasks.
- app.js: plik zawierający konfigurację serwera Express.js oraz połączenie z bazą MongoDB.
- package.json: plik konfiguracyjny zawierający informacje o aplikacji oraz listę zależności.
- frontend/: folder zawierający kod frontendu napisanego w React z wykorzystaniem bibliotek React Router oraz Axios.
- public/: folder zawierający pliki statyczne, np. plik index.html.
- src/: folder zawierający pliki źródłowe aplikacji React.
- components/: folder zawierający komponenty React, np. komponent Task.
- pages/: folder zawierający strony aplikacji, np. strona Home lub AddTask.
- App.js: plik zawierający główny komponent aplikacji.
- index.js: plik zawierający kod do renderowania aplikacji.
- package.json: plik konfiguracyjny zawierający informacje o aplikacji oraz listę zależności.
- README.md: plik zawierający dokumentację projektu.
