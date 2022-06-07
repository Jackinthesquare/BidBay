class ImagesController < ApplicationController
    def index
        render json: Image.all, status: :ok
    end
    
    def create
        create = Image.create(image_params)
        render json: create, status: :ok
    end

    private
    def image_params
        params.permit(:url, :item_id)
    end
end
