class IndividualItemSerializer < ActiveModel::Serializer
  attributes :id, :title, :item_price, :description, :item_tag, :user_id, :end_time, :time_diff, :end_time_str

  has_many :images
  has_many :bids

end
