class ItemSerializer < ActiveModel::Serializer
  attributes [
    :id, 
    :title, 
    :item_price, 
    :description, 
    :item_tag, 
    :user_id, 
    :end_time, 
    :end_time_to_i,
    :end_time_str,
    :image
  ]
  

  def image
    ActiveModel::SerializableResource.new(object.images.first,  each_serializer: ImageSerializer)
  end
end
