class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :balance, :password, :pfp
end
