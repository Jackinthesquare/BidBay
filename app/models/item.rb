class Item < ApplicationRecord
    belongs_to :user
    has_many :images
    has_many :bids


    attribute :item_price, default: 0
    attribute :end_time, default: Time.now + 5.minute
    attribute :time_diff, default: 30
    # attribute :end_time_str, default: Time.now.asctime
    attribute :end_time_str, default: (Time.now + 5.minute).strftime("%m/%d/%Y at %I:%M %p")
end
