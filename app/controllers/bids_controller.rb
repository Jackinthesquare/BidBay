class BidsController < ApplicationController
    def index
        render json: Bid.all
    end

    def create
        create = Bid.create(bid_params)
        render json: create, status: :created
    end

    private
    def bid_params
        params.permit(:bid_price, :item_id, :user_id)
    end
end
