class Api::TransactionsController < ApplicationController
    #create new transaction (buy or sell cryptocurrency)

    def create
        @txn = Transaction.new(txn_params)

        if @txn.save
            render :create 
        else
            render json: @txn.errors.full_messages, status: 422
        end
    end

    def show
        @txn = Transaction.find(params[:id])

        if @txn
            render json: @txn
        else  
            render json: ["transaction doesn't exist"]
        end
    end

    def index
      if current_user
        @txns = current_user.transactions.order(created_at: :desc)
      end

      if @txns
          render :index 
      else
          render json: ["user doesn't exist :("]
      end
    end

    private
    def txn_params
        params.require(:txn).permit(:wallet_id, :amount)
    end
end
