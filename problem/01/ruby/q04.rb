# この問題では、木の本数がいくつになるかが大事
# | 20 | => 1(*2)
# | 10 | 10 | => 2(*2)
# | 5 | 5 | 5 | 5 | => 4(+3)
# | 2 | 3 | 2 | 3 | 2 | 3 | 5 | => 7(+3)

def cutbar(max_member, tree_length, current_tree_num)
  puts "#{max_member}, #{tree_length}, #{current_tree_num}"
  if current_tree_num >= tree_length then
    0 # 切り終えた
  elsif current_tree_num < max_member then
    1 + cutbar(max_member, tree_length, current_tree_num * 2)
  else
    # 木の数が現在の人数よりも多いので、max_memberを全員投入して木を切る
    1 + cutbar(max_member, tree_length, current_tree_num + max_member)
  end
end

puts "1 => #{cutbar(3, 20, 1)} times"
# puts "2 => #{cutbar(5, 100, 1)} times"
