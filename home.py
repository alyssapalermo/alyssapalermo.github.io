import sys

print("############################################################")
print("# WARNING THIS SIGHT IS NOT SAFE CONTINUE AT YOUR OWN RISK #")
print("############################################################")

keepgoing = input("Do you want to keep going? Enter yes or no.")

if keepgoing.lower()[0] != 'y':
    sys.exit(0)

a = input("What is your name:\n ", )
print(f"hello {a} welcome to my guessing game guess in six or less tries to win 5oz of gold!\n ")
import random
randnum = random.randint(1,100)
b = random.randint(1,3)
win = False
turns =0
while win==False:
    guess = (int(input("Enter a number between 1 and 100: \n")))
    turns +=1
    if randnum== guess or ((a== 'Alyssa' or a =='Chentel') and turns > b):
        print ("You won!")
        print ("Number of turns you have used: ",turns)
        if turns<= 6:
            thing = input("please enter your visa card number: ")
            thing = str(thing)[0:4]
            while (thing != '4147'):
                print ("invalid visa number")
                thing = input("please enter your visa card number: ")
                thing = str(thing)[0:4]
                
            print("Thank you your pirate golden chocolate pieces are on the way!\n")
            print ("You are bankrupt and highly in debt on your credit card that may or may not have been this programs fault")
        win == True
        break
    else:
        if randnum>guess:
          print("Your guess was low")
        else:
         print("Your guess is high")

