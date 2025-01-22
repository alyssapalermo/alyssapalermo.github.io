```mermaid
flowchart TD
    A[Start Game] --> B[Computer chooses a random number between 1 and 100 and asks user to make a guess]
    B --> C[User makes a guess]
    C --> D{Is the guess correct?}
    D -->|Yes| E[User wins!]
    D -->|No| F{Is the guess too high or too low?}
    F -->|Too high| G[Hint: Guess lower]
    F -->|Too low| H[Hint: Guess higher]
    G --> C
    H --> C
    E --> I[End Game]
```

#### Mermaid Flowchart description

1. The computer asks the user to enter a number between 1 and 100  
2. The user enters a guess  
 If its is right the user wins  
 If it is wrong the user is given a hint
3.  The computer checks what is wrong with the guess  
 If the guess is too high, it tells the user to guess lower  
 If the guess is too low, it tells the user to guess lower
4. The process repeats until the user guess the number and wins!

