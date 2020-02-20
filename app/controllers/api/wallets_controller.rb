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
        @wallet = current_user.wallets.find(params[:id])

        if @wallet
            render json: @wallet
        else
            render json: ["wallet doesn't exist"]
        end
    end

    def index
      if current_user
        @wallets = current_user.wallets
      end

      if @wallets
          render json: @wallets
      else
          render json: ["user don't exist :("]
      end

    end

    def update
        @wallet = current_user.wallets.find(params[:id])

        if @wallet.update(wallet_params)
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
