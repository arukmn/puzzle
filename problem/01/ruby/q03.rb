# カードの枚数
N = 100

cards = Array.new(N, false)

# number-2 turns card every 1 cards
# number-3 turns card every 2 cards
(2..N).each{|i|
  # initial place
  # for example, first card's index is 0
  j = i - 1

  # don't turn it after 100th card
  while(j < N) do
    cards[j] = !cards[j]
    # interval
    j += i
  end

}

N.times{|i|
  puts i + 1 if !cards[i]
}