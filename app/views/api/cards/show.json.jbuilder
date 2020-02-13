json.card @card


json.deck do
    json.extract! @card.deck, :id, :title, :author_id
    json.cardIds @card.deck.card_ids
end