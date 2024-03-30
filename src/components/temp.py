                
                list1 = [1, 2, 3]
                list2 = ['a', 'b', 'c']
                zipped = zip(list1, list2)
                print(list(zipped))  # Output: [(1, 'a'), (2, 'b'), (3, 'c')]

                my_list = [1, 2, 3, 4, 5]
                filtered_list = list(filter(lambda x: x % 2 == 0, my_list))
                print(filtered_list)  # Output: [2, 4]

                my_list = [1, 2, 3, 4, 5]
                mapped_list = list(map(lambda x: x ** 2, my_list))
                print(mapped_list)  # Output: [1, 4, 9, 16, 25]

                my_list = [3, 1, 4, 1, 5, 9, 2]
                sorted_list = sorted(my_list)
                print(sorted_list)  # Output: [1, 1, 2, 3, 4, 5, 9]

                my_list = [1, 2, 3, 4, 5]
                reversed_list = list(reversed(my_list))
                print(reversed_list)  # Output: [5, 4, 3, 2, 1]

                                    Muhammad Asadullah