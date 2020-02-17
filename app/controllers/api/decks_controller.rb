class Api::DecksController < ApplicationController

    before_action :ensure_logged_in

    def index
        @decks = current_user.decks
        render :index
    end

    def create 
        @deck = Deck.new(deck_params)
        @deck.author_id = current_user.id

        if @deck.save
            render :show
        else
            render json: @decks.errors.full_messages, status: 422
        end
    end

    def show
        @deck = Deck.find(params[:id])
        render :show
    end

    def destroy
        @deck = Deck.find(params[:id])

        if @deck
            @deck.destroy!
            render :show
        else
            render json @deck.errors.full_messages
        end
    end

    def update 
        @deck = current_user.decks.find(params[:id])
        @deck.update(deck_params)
    end

    private

    def deck_params
        params.require(:deck).permit(:title)
    end
    
end