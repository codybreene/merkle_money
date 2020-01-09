class Api::WalletsController < ApplicationController

    def create
        @wallet = Wallet.new(wallet_params)

        if @wallet.save
            render json: @wallet
        else
            render json: @wallet.errors.full_messages
        end
    end

    def show
        @wallet = Wallet.find(params[:id])

        if @wallet
            render json: @wallet
        else
            render json: ["wallet doesn't exist"]
        end
    end

    def index
        @wallets = User.find(current_user.id).wallets

        if @wallets
            render json: @wallets
        else
            render json: ["user don't exist :("]
        end

    end

    def update
        @wallet = current_user.transactions.find(params[:id])

        if @post.update(wallet_params)
            render json: @wallet
        else
            render json: @wallet.errors.full_messages
        end
    end

    private
    def wallet_params
        params.require(:wallet).permit(:user_id, :currency, :balance)
    end

end
