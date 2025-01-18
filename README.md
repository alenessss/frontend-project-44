### Тесты Hexlet и статус линтера:
[![Actions Status](https://github.com/alenessss/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/alenessss/frontend-project-44/actions)
<a href="https://codeclimate.com/github/alenessss/frontend-project-44/maintainability"><img src="https://api.codeclimate.com/v1/badges/bb0d0e81849059f07d7b/maintainability" /></a>

## О проекте

Данная программа называется «Игры разума» — это набор из пяти консольных игр, построенных по принципу популярных мобильных приложений для прокачки мозга. Каждая игра задает вопросы, на которые нужно дать правильные ответы. После трех правильных ответов считается, что игра пройдена. Неправильные ответы завершают игру и предлагают пройти ее заново. Игры:

- Калькулятор. Арифметические выражения, которые необходимо вычислить.
- Прогрессия. Поиск пропущенных чисел в последовательности чисел.
- Определение четного числа(brain-even)
- Определение наибольшего общего делителя.
- Определение простого числа.

## Требования:

- Node.js последней версии в систему глобально

## Инструкция по установке:

1. Склонируйте созданный репозиторий проекта локально. В результате клонирования репозитория в вашей файловой системе появится корневая директория проекта — в ней будем размещать все файлы проекта. По умолчанию, имя этой директории будет таким же, как имя репозитория.
2. Инициализируйте наш npm-пакет внутри корневой директории проекта, используя команду make install

```js
git clone git@github.com:alenessss/frontend-project-44.git
cd frontend-project-44/
make install
npm link
```

## Игры

### Игра brain-even:

Вам нужно угадать четное или нечетное число. Если число четное, то нужно написать «да». В противном случае нужно написать «нет». Ниже представлена установка данных игр и запуск brain-even
[![asciicast](https://asciinema.org/a/KrVV0eR0SbufNLhINBJTwSX0c.svg)](https://asciinema.org/a/KrVV0eR0SbufNLhINBJTwSX0c)

### Игра brain-calc:

Вам необходимо решить выражение и написать правильный ответ. Ниже представлен запуск brain-calc и попытки удасной и неудачной игры

[![asciicast](https://asciinema.org/a/RUgihmf8oJJsMOxF7jK1fpyYo.svg)](https://asciinema.org/a/RUgihmf8oJJsMOxF7jK1fpyYo)

### Игра brain-gcd:

Вам необходимо найти наибольший общий делитель заданных чисел и записать его. Ниже представлен запуск brain-gcd и попытки удасной и неудачной игры

[![asciicast](https://asciinema.org/a/4PWRaRzEGzm5D8yUZxRUMiA8C.svg)](https://asciinema.org/a/4PWRaRzEGzm5D8yUZxRUMiA8C)

### Игра brain-progression

Вам нужно угадать, какое число пропущено в прогрессии, и записать его. Ниже представлен запуск brain-grogression и попытки удасной и неудачной игры

[![asciicast](https://asciinema.org/a/oMtnQA9kifsQQcyFDORQckBRi.svg)](https://asciinema.org/a/oMtnQA9kifsQQcyFDORQckBRi)

### Игра brain-prime

Вам нужно ответить "да", если данное число простое. В противном случае ответьте "нет". Ниже представлен запуск brain-prime и попытки удасной и неудачной игры

[![asciicast](https://asciinema.org/a/CjGS0osDgp9mJB1GQau6MLpzS.svg)](https://asciinema.org/a/CjGS0osDgp9mJB1GQau6MLpzS)
