**KOPACZE - DIGGERS WEBSITE**

## Simplified

Zanim zaczniesz się frustrować, że zmian nie widać na stronie - pamiętaj o hard reload strony (ctrl + R). Możesz też sprawdzać zmiany otwierając nową kartę incognito.

### Zawartość folderów

    - `.github` - plik definiujący automatyzację, która publikuje stronę w internecie
    - `src/assets` - zdjęcia
    - `src/common` - definicja kolorów występujących na stronie
    - `src/components` - elementy strony jak menu, przycisk, galeria etc
    - `src/i18n` - konfiguracja mechanizmu tłumaczeń strony
    - `src/locales` - treści stron przetłumaczone na pl i en
    - `src/pages` - podstrony
    - `static` - ikonka która wyświetla się w pasku przeglądarki obok tytułu strony

### Edycja treści

Żeby zmienić tekst na stronie, wejdź do pliku w folderze `locales`, kliknij ikonę ołówka w prawym górnym rogu, znajdź sekcję odpowiadającą podstronie którą chcesz edytować i edytuj plik.

Ciąg znaków `\u00A0` oznacza non-breaking space działa jak twarda spacja np. w libre office.

Ciąg znaków `\n` oznacza nową linię - używanie enterów w pliku `translations.json` jest zabronione.

Plik jest mapą klucz-wartość. Np. linijka:
`"options": "What can we do\u00A0together?",`

ma klucz `options` i wartość `What can we do\u00A0together?`. Klucz nie może zawierać spacji. Wartość może zawierać spacje, ale nie może zawierać enterów. Wartość wyświetlana jest na podstronie. Klucz służy do "wklejenia" danej treści w odpowiednie miejsce.

Pamiętaj, żeby edytować obie wersje językowe!

#### Przykład

Chcę zmienić treść jednego kafelka na stronie Współpraca. Zamiast "Przyjechać posiedzieć" chcę mieć "Przyjechać popływać".

1. Wchodzę do pliku `/src/pages/cooperation` i zjeżdżam na sam dół.

2. Szukam tekstów - są oznaczone ciągiem `{t("klucz")}`

3. Znajduję klucz odpowiadający tekstowi który chcę zmienić. Klucze są nazwane w dość opisowy sposób, żeby ułatwić to zadanie. Dodatkowo zazwyczaj tekst który jest pierwszy na stronie, jest też pierwszy w pliku. Tekst w kafelkach jest przypisany do klucza `cooperation.optionsList`

4. Otwieram plik `/src/locales/pl/translations` i szukam najpierw pierwszej części klucza: `cooperation`. Na ten moment znajduje się w linijce 9. Potem w bloku `cooperation` szukam drugiej części klucza: `optionsList` (linijka 13).

5. Ta linijka składa się z kilku tekstów rozdzielonych znakiem `\n` i kafelki są napisane tak, że wiedzą że każde zdanie ma wylądować w innym kafelku. Lokalizuję tekst który chcę zmienić, klikam ołówek w prawym górnym roku i zmieniam tekst.

6. Klikam zielony przycisk "Commit changes" i w pierszym polu wpisuję krótki opis zmian, np "cooperation subpage text change".

7. Powtarzam kroki 4-7 dla angielskiej wersji językowej.

8. Wchodzę w zakładkę `Actions`, tam powinien pojawić się proces, który buduje stronę. Jeśli wyświetli się na zielono, strona jest gotowa do obejrzenia.

### Zmiana zdjęć

Galeria wyświetla wszystkie zdjęcia z folderu `src/assets` (format png, jpg, jpeg, svg, webp). Dla wydajności strony stosuj format `webp`.

Pozostałe strony wyświetlają po jednym zdjęciu na sekcję.

### Przykład

Chcę zmienić fotkę w tle sekcji "nasza przestrzeń" na stronie głównej.

1. Wchodzę do pliku `src/pages/index`. Sekcja "nasza przestrzeń" jest druga na stronie, więc szukam drugiego elementu `StyledBackgroundImage`.

2. Jako tło użyty jest obrazek `secondImage`. Scrolluję na sam początek pliku i szukam linijki zawierającej `import secondImage`. Linijka wskazuje na plik `kopacze-3.webp`

3. Otwieram plik `assets/kopacze-3` i w prawym górnym rogu klikam menu z trzema kropkami i usuwam plik.

4. Zatwierdzam zmiany klikając zielony przycisk "Commit changes"

5. Dodaję komentarz np. "Removing old photo from main page"

6. Otwieram folder `assets`, klikam 'Add file', 'Upload files'.

7. Wgrywam plik, który ma taką samą nazwę jak usunięty przed chwilą - `kopacze-3.webp`

8. Zatwierdzam zmiany klikając zielony przycisk "Commit changes"

9. Dodaję komentarz np. "Adding new photo to main page"

10. Wchodzę w zakładkę `Actions`, tam powinien pojawić się proces, który buduje stronę. Jeśli wyświetli się na zielono, strona jest gotowa do obejrzenia.

## Developer

To publish page

1. push to branch `master`

Repo structure

Code to be deployed to page is at `gh-pages`, source for project is at `master`. To configure the repo:

1. push the code to master branch
2. Go to Settings -> Pages
3. In Build and deployment set Source to Deploy from a branch
4. Select gh-pages and root in Branch section
5. Add custom domain: kopacze.space
6. Check Enforce HTTPS option

Errors

If you get `Error: error:0308010C:digital envelope routines::unsupported`, switch to node version 16.12.0

Development notes

Not so complicated, you will manage ;)
