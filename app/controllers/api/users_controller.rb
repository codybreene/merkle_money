class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    
    if @user.save
      wallet = Wallet.create({
        user_id: @user.id,
        currency: "btc",
        balance: 0.25
      })
      Transaction.create({
        wallet_id: wallet.id,
        amount: 0.25
      })
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end


  private
  def user_params
    params.require(:user).permit(:email, :password)
  end
end
