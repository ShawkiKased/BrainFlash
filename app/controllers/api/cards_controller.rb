class Api::CardsController < ApplicationController

    def create
        @card = Card.new(card_params)

        if @card.save
            render :show
        else
            render json: @card.errors.full_messages
        end
    end

    def show
        @card = current_user.decks.find_by(params[:id])
    end

    def destroy
        @card = Card.find(params[:id])

        if @card
            @card.destroy!
            render :show
        else
            render json: @card.errors.full_messages
        end
    end

    private

    def card_params
        params.require(:card).permit(:front, :back, :deck_id)
    end
    
end