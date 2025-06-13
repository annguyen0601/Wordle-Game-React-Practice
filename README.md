# Wordle Game – React Practice

A simple Wordle clone built with React. This project is for practicing React basics and having fun with a classic word guessing game!

## 🚀 Getting Started

Clone the repo, install dependencies, and run the app:

```bash
git clone https://github.com/annguyen0601/Wordle-Game-React-Practice.git
cd Wordle-Game-React-Practice
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to play. The app reloads automatically if you edit the code. You’ll also see any lint errors in the console[^1].

## 🕹️ How to Play

- Guess the hidden five-letter word in six tries or less.
- Each guess must be a valid five-letter word.
- After each guess, the color of the tiles will change to show how close your guess was to the word.


## 📦 Scripts

- `npm start` – Runs the app in development mode.
- `npm test` – Launches the test runner.
- `npm run build` – Builds the app for production.
- `npm run eject` – **Warning:** This is permanent! Only use if you need full control over the config[^1].


## 🤝 Contributing

Pull requests are welcome! For major changes, open an issue first to discuss what you’d like to change.

---

**Examples:**

- If you guess “PLANT” and the hidden word is “PLANE,” the “P,” “L,” “A,” and “N” tiles will turn green or yellow depending on their position.
- Typing a word that isn’t five letters will not be accepted by the game logic.
