@decks.each do |deck|
    json.set! deck.id do
        json.id deck.id
        json.title deck.title
        json.author_id deck.author_id
        json.cardIds deck.cards.pluck(:id)
    end
end