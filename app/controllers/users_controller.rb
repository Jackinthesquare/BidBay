class UsersController < ApplicationController
    def index
        render json: User.all
    end

    def show
        render json: find_user, serializer: IndividualUserSerializer, status: :ok
    end

    def create
        create = User.create(user_params)
        render json: create, status: :created
    end


    private

    def find_user
        user = User.find(params[:id])
    end

    def user_params
        params.permit(:username, :password)
    end
end
