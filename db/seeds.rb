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
    'question'=> '1000 x 1000?',
    'answer'=> '1,000,000',
    'deck_id'=> mathDeck.id,
    'author_id'=> demo.id
})

math2 = Card.create!({
    'question'=> 'What is the Square Root of 64?',
    'answer'=> '8',
    'deck_id'=> mathDeck.id,
    'author_id'=> demo.id
})

math3 = Card.create!({
    'question'=> 'What is the Log(2) of 512?',
    'answer'=> '9',
    'deck_id'=> mathDeck.id,
    'author_id'=> demo.id
})

math4 = Card.create!({
    'question'=> 'What is the proper order of operations?',
    'answer'=> 'PEMDAS',
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

science2 = Card.create!({
    'question'=> 'What is H2O2?',
    'answer'=> 'Hydrogen peroxide',
    'deck_id'=> scienceDeck.id,
    'author_id'=> demo.id
})

science3 = Card.create!({
    'question'=> 'what is the quantitative measure of an earthquakes magnitude(size)?',
    'answer'=> 'Richter Scale',
    'deck_id'=> scienceDeck.id,
    'author_id'=> demo.id
})

science4 = Card.create!({
    'question'=> 'Who is the German-born theoretical physicist who developed the theory of relativity?',
    'answer'=> 'Albert Einstein',
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

history2 = Card.create!({
    'question'=> 'Which US President served the longest terms?',
    'answer'=> 'Theodore Roosevelt',
    'deck_id'=> historyDeck.id,
    'author_id'=> demo.id
})

history3 = Card.create!({
    'question'=> 'Who was the german dictator that fought in World War 2?',
    'answer'=> 'Adolf Hitler',
    'deck_id'=> historyDeck.id,
    'author_id'=> demo.id
})

history4 = Card.create!({
    'question'=> 'What battle was the long-standing controversy between northern United States and southern United States?',
    'answer'=> 'The American Civil War',
    'deck_id'=> historyDeck.id,
    'author_id'=> demo.id
})





