class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user
            login(@user)
            render json: 'logged in successfully'
        else 
            render json: 'invalid credentials'
        end   
    end

    def destroy
        if logged_in?
            logout
            render json: {}
        else   
            render json: 'no one logged in', status: 404
        end
    end
end
