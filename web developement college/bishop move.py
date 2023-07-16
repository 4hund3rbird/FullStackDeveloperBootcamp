pos_x=input()
pos_y=input()
bishop_not=[]
def bishop_move():
	pos_x_set=["A","B","C","D","E","F","G","H"]
	pos_y_set=["1","2","3","4","5","6","7","8"]
	
	for i in range(0,8):
		position=""
		position+=pos_y_set[i]
	
		for j in range(i+1,8-i):
			position+=pos_x_set[j]
			bishop_not.append(position)

bishop_move()
position=pos_y+pos_x
if position in bishop_not:
	print("No")
else:
	print("Yes")



