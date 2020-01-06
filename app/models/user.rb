class User < ApplicationRecord

    validates :email, :password_digest, :session_token, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    attr_reader :password 

    after_initialize :ensure_session_token

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user.save 
        user.is_password?(password) ? user : nil 
    end

    # take password and turn it into an encrypted digest
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest) == password 
    end

    # reset token, save it, and return it
    def reset_session_token!
        self.session_token = SecureRandom.base64(64)
        self.save!
        self.session_token
    end

    private
    def ensure_session_token
        self.session_token ||= SecureRandom.base64(64)
    end

end
