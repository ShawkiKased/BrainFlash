export const fetchCards = deckId => {
    return $.ajax({
        method: "GET",
        url: `/api/cards/${deckId}/cards`
    });
}

export const fetchCard = card => {
    return $.ajax({
        method: "GET",
        url: `/api/cards${card.deck_id}/cards`
    });
}

export const createCard = card => {
    return $.ajax({
        method: "POST",
        url: `/api/cards`,
        data: { card }
    });
}

export const updateCard = card => {
    return $.ajax({
        method: "POST",
        url: `api/cards/${deckId}/cards`,
        data: { card }
    });
}

export const removeCard = cardId => {
    return $.ajax({
        method: "DELETE",
        url: `/api/cards/${cardId}`
    });
}