class Item < ApplicationRecord
    belongs_to :user
    has_many :images
    has_many :bids

    attribute :item_price, default: 0
    attribute :end_time, default: Time.now
end
