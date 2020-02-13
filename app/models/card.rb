class Card < ApplicationRecord

    validates :question, :answer, presence: true

    belongs_to :deck,
    primary_key: :id,
    foreign_key: :deck_id,
    class_name: :Deck

    belongs_to :user,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

end