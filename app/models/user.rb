class User < ApplicationRecord
    validates :email, :password_digest, :session_token, presence: true
    validates :email, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    after_initialize :ensure_session_token
    attr_reader :password


    has_many :decks,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Deck

    has_many :cards,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Card


    # Using FIGVAPER as a reference for the methods

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def is_password?(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token!
        generate_unique_session_token
        save!
        self.session_token
    end

    private 
    def generate_unique_session_token
        self.session_token = new_session_token
        while User.find_by(session_token: self.session_token)
            self.session_token = new_session_token
        end
        self.session_token
    end

    def ensure_session_token
        generate_unique_session_token unless self.session_token
    end

    def new_session_token
        SecureRandom.urlsafe_base64
    end
end
