import random   
ran = random.randint(1,100)   
a =-1 
gr = False     
while True: 
        if gr == True:
            break
        a = input("Вгадай число від 1 до 100 \n")     
        if str(a) == "exit":   
            print("Припинення роботи")
            break    
        elif int(a) > ran: 
            print("Число повинне бути меньше!")  
        elif int(a) < ran:
            print("Число повинне бути більше!")  
        else:
            gr = True
            print("Ви вгадали, це число = " + str(ran))
