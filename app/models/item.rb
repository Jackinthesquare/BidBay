class Item < ApplicationRecord
    belongs_to :user
    has_many :images
    has_many :bids

    attribute :item_price, default: 0
    attribute :end_time, default: Time.now + 120
    attribute :end_time_sec, default: Time.at(Time.now + 1200).sec - Time.at(Time.now).sec
    # attribute :end_time_str, default: Time.now.asctime
    attribute :end_time_str, default: (Time.now + 1200).strftime("%m/%d/%Y at %I:%M %p")
end
