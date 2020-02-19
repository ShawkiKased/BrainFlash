json.set! @deck.id do
    json.extract! @deck, :id, :title, :author_id
    json.cardIds @deck.card_ids
end

json.cards do
    @deck.cards.each do |card|
        json.set! card.id do
            json.id card.id
            json.question card.question
            json.answer card.answer
        end
    end
end