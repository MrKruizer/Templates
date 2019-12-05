n=int(input('Количество дисков:'))
def move(n,x,y):
    if n!=0:
        if x==1 and y==3:
            move(n-1,x,2)
            print(n,x,y)
            move(n-1,2,y)
        elif x==2 and y==3:
            move(n-1,x,1)
            print(n,x,y)
            move(n-1,1,y)
        elif x==2 and y==1:
            move(n-1,x,3)
            print(n,x,y)
            move(n-1,3,y)
        elif x==3 and y==1:
            move(n-1,x,2)
            print(n,x,y)
            move(n-1,2,y)
        elif x==3 and y==2:
            move(n-1,x,1)
            print(n,x,y)
            move(n-1,1,y)
        elif x==1 and y==2:
            move(n-1,x,3)
            print(n,x,y)
            move(n-1,3,y)
start=int(input('С какого столбца снимать диски?(от 1 до 3): '))
end=int(input('На какой переносить диски?(1-3): '))
if (start==end):
    print('Error!')
else:
    print('Диск, с какого столбца снимается, на какой переносится')
    move(n,start,end)
