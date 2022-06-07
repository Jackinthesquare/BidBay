class ItemsController < ApplicationController
    def index
        render json: Item.all
    end

    def show
        render json: find_item, serializer: IndividualItemSerializer, status: :ok
    end

    def create
        create = Item.create(item_params)
        render json: create, status: :ok
    end

    private

    def find_item
        Item.find(params[:id])
    end

    def item_params
        params.permit(:title, :item_price, :description, :item_tag, :user_id)
    end
end
