class Deck < ApplicationRecord 

    validates :title, presence: true

    belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

    has_many :cards,
    primary_key: :id,
    foreign_key: :deck_id,
    class_name: :Card

end