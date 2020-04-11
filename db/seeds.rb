# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Deck.destroy_all


demo = User.create!({
    email: "demoUser@aol.com",
    password: "demoguy"
})

mathDeck = Deck.create!({
    'title'=> 'Math',
    'author_id'=> demo.id
})

math1 = Card.create!({
    'question'=> '1000 x 1000',
    'answer'=> '1,000,000',
    'deck_id'=> mathDeck.id,
    'author_id'=> demo.id
})

scienceDeck = Deck.create!({
    'title'=> 'Science',
    'author_id'=> demo.id
})

science1 = Card.create!({
    'question'=> 'Who discovered Gravity by a falling Apple?',
    'answer'=>  'Isaac Newton',
    'deck_id'=> scienceDeck.id,
    'author_id'=> demo.id
})

historyDeck = Deck.create!({
    'title'=> 'History',
    'author_id'=> demo.id
})

history1 = Card.create!({
    'question'=> 'Who is the first president of the United States?',
    'answer'=> 'George Washington',
    'deck_id'=> historyDeck.id,
    'author_id'=> demo.id
})





