class User < ApplicationRecord
  validates :username, :email, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, presence: true, allow_nil: true, length: { minimum: 6 }

  attr_reader :password

  before_validation :ensure_session_token, :ensure_session_token_uniqueness

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)

    user if user && user.is_password?(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password

    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= reset_session_token!
  end

  def ensure_session_token_uniqueness
    while User.find_by(session_token: self.session_token)
      self.session_token = reset_session_token!
    end
  end
end
