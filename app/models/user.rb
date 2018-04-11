class User < ApplicationRecord
  validates :username, :email, presence: true, uniqueness: true
  validates :password_digest, :session_token, presence: true
  validates :password, presence: true, allow_nil: true, length: { minimum: 6 }

  has_many :meals
  has_many :meal_orders

  attr_reader :password

  after_initialize :ensure_session_token
  # before_validation :ensure_session_token_uniqueness

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)

    user && user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password

    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = new_session_token
    self.save
    self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def ensure_session_token
    self.session_token ||= new_session_token
  end

  # def ensure_session_token_uniqueness
  #   while User.find_by(session_token: self.session_token)
  #     self.session_token = new_session_token
  #   end
  #
  #   self.save     # I think we do this too?
  # end
end
