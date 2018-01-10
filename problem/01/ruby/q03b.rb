# As you know, card which has already passed before loop doesn't turn again. so...
(1..100).each{|i|
  flag = false

  (1..100).each{|j|
    if i % j == 0 then
      flag = !flag
    end
  }

  puts i if flag
}