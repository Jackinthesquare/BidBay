class IndividualUserSerializer < ActiveModel::Serializer
  attributes :id, :username, :balance, :pfp, :items

  # has_many :items
  def items
    ActiveModel::SerializableResource.new(object.items,  each_serializer: IndividualItemSerializer)
  end

end
