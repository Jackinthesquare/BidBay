class ItemSerializer < ActiveModel::Serializer
  attributes :id, :title, :item_price, :description, :item_tag, :user_id
end
