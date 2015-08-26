#
# Your name:
#
# Date: Tue., Sep. 3 or Wed. Sep. 4, 2013
#
# Here is a short python program... try it out!
# 
# Comments are in red.


import time          # includes a library named time
import random        # a random library


name = raw_input('Hi... what is your name? ')   
print

if name == 'Geoff' or name == 'Colleen':
    print 'I\'m "offline." Try later.'

elif name == 'Zach':                            
    print 'Zach Quinto!?!'
    time.sleep(.5)             
    print 'No?'
    time.sleep(.5)
    print 'Meh.'

else:                   
    print 'Welcome,', name
    my_choice = random.choice(['rock', 'paper', 'scissors'])
    print 'By the way, I choose', my_choice
    print



# The lab problem (problem 1) is to run + submit this file, hw0pr1.py
#
#   Submit it at     www.cs.hmc.edu/submit
#   Login with passwd "asdf" (which you should then change)
#
# Gold/black have different problems for #2... (check the site)
#


