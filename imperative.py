

def numMatches(list1, list2):
	matches = 0
	i = 0
	j = 0
	while i < len(list1) and j < len(list2):
		if list1[i] == list2[j]:
			matches += 1
			i += 1
			j += 1
		elif list1[i] < list2[j]:
			i += 1
		else:
			j += 1
			return matches

			print numMatches(['a', 'c', 'd', 'f'], ['b', 'd', 'f', 'g'])


def selectionSort(listToSort):
	'''sorts aList iteratively and in-place'''
	for starting_index in range(len(listToSort)):
		min_elem_index = index_of_min(listToSort, starting_index)
		swap(listToSort, starting_index, min_elem_index)
	return listToSort

	# And here is index_of_min!:
def index_of_min(aList, start_index):
	'''returns the index of the min element at or after start_index'''
	min_elem_index = start_index
	for i in range(start_index, len(aList)):
		if aList[i] < aList[min_elem_index]:
			min_elem_index = i
	return min_elem_index

	#And swap:
def swap(aList, i, j):
	'''swaps the values of aList[i] and aList[j]'''
	temp = aList[i]       # store the value of aList[i]
	                          # for a moment
	aList[i] = aList[j]   # make aList[i] refer to
	                          # the value of aList[j]
	aList[j] = temp       # make aList[j] refer to the
	                          # stored value

listToSort = [2, 5, 4]
selectionSort(listToSort)
print (listToSort)