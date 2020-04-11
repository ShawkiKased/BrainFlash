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

scienceDeck = Deck.create!({
    'title'=> 'Science',
    'author_id'=> demo.id
})

historyDeck = Deck.create!({
    'title'=> 'History',
    'author_id'=> demo.id
})





