class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :balance, :password
end
