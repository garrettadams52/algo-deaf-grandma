from curses.ascii import isupper


def deaf_grandma():
    
    bye = 0

    while bye != 2:
        string = input()

        if string == '':
            print("WHAT?!")
        elif (string.isupper() and string != 'GOODBYE!'):
            print('NO, NOT SINCE 1946!')
        elif string == 'GOODBYE!':
            if bye == 0:
                print('LEAVING SO SOON?')
                bye = bye + 1
            else:
                print('LATER, SKATER!')
                bye = bye + 1
        else:
            print('SPEAK UP, KID!')
    

deaf_grandma()
