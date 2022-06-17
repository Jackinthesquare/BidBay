class Item < ApplicationRecord
    belongs_to :user
    has_many :images
    has_many :bids

    # ending time controls auction timer
    
    attribute :item_price, default: 0
    attribute :end_time, default: Time.now + 2.minute
    attribute :end_time_str, default: (Time.now + 2.minute).strftime("%m/%d/%Y at %I:%M %p")

    attribute :end_time_to_i, default: (Time.now + 2.minute).to_i
    # attribute :end_time_str, default: Time.now.asctime
end
