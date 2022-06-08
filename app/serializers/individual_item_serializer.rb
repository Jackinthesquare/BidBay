class IndividualItemSerializer < ActiveModel::Serializer
  attributes :id, :title, :item_price, :description, :item_tag, :user_id

  has_many :images
  has_many :bids

end